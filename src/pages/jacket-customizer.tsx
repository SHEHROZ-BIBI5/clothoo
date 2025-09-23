import { useState } from "react";
import { ShoppingCart, Heart, Share2, ChevronDown, Bolt, User } from "lucide-react";
import CustomizationPanel from "@/components/jacket-customizer/CustomizationPanel";
import JacketPreview from "@/components/jacket-customizer/JacketPreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const JacketCustomizer = () => {
  const { toast } = useToast();
  
  const [customizationOptions, setCustomizationOptions] = useState({
    bodyMaterial: "melton-wool",
    sleevesMaterial: "cowhide-leather",
    sleeveStyle: "set-in",
    collarStyle: "classic-standup",
    pocketsStyle: "slash-pocket",
    knitStyle: "style-2",
    frontClosure: "button",
    insideLining: "quilted",
    bodyColor: "royal-blue",
    sleeveColor: "white",
    knitColor: "white",
    chestPocket: false,
    sleevesStripe: false,
    cuffStyle: "classic-knit",
  });

  const [selectedSize, setSelectedSize] = useState("M");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [price, setPrice] = useState(80);

  const handleOptionsChange = (newOptions: Partial<typeof customizationOptions>) => {
    setCustomizationOptions(prev => ({ ...prev, ...newOptions }));
    
    // Calculate price based on options (simplified logic)
    let newPrice = 80;
    if (newOptions.bodyMaterial === "cowhide-leather") newPrice += 20;
    if (newOptions.sleevesMaterial === "sheep-leather") newPrice += 15;
    if (newOptions.chestPocket) newPrice += 10;
    if (newOptions.sleevesStripe) newPrice += 8;
    
    setPrice(newPrice);
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `Custom jacket added to cart for $${price}`,
    });
  };

  const handleSaveDesign = () => {
    toast({
      title: "Design Saved",
      description: "Your jacket design has been saved to your account",
    });
  };

  const handleShareDesign = () => {
    toast({
      title: "Design Shared",
      description: "Share link copied to clipboard",
    });
  };

  const getColorValue = (colorName: string) => {
    const colorMap: Record<string, string> = {
      "white": "#ffffff",
      "cream": "#fffed0",
      "beige": "#d1c4a4",
      "black": "#000000",
      "royal-blue": "#1e40af",
      "red": "#dc2626",
      "green": "#059669",
      "purple": "#7c3aed",
      "dark-grey": "#565656",
      "light-grey": "#99999a",
    };
    return colorMap[colorName] || "#ffffff";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">CLOTHOO</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Varsity Jackets
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Other Styles
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Design Your Own
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <button className="text-gray-700 hover:text-gray-900 font-medium">Support</button>
            </div>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <User className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center text-sm font-medium">
        <Bolt className="inline w-4 h-4 mr-2" />
        Flash Sale: 60% Off + Fast Shipping USA & Canada 🇺🇸 🇨🇦
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">Design</span> Varsity Jackets
          </h1>
          <p className="text-gray-600">Create your custom jacket with premium materials and personalized style</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Customization Panel */}
          <div className="lg:col-span-1">
            <CustomizationPanel
              options={customizationOptions}
              onOptionsChange={handleOptionsChange}
              price={price}
            />

            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
              <div className="space-y-4">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 h-auto"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart - ${price}
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleSaveDesign}
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 h-auto"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Save Design
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleShareDesign}
                  className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold py-3 px-6 h-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Design
                </Button>
              </div>
            </div>
          </div>

          {/* Center - Jacket Preview */}
          <div className="lg:col-span-2">
            <JacketPreview
              bodyColor={getColorValue(customizationOptions.bodyColor)}
              sleeveColor={getColorValue(customizationOptions.sleeveColor)}
              knitColor={getColorValue(customizationOptions.knitColor)}
              frontClosure={customizationOptions.frontClosure}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
              specialInstructions={specialInstructions}
              onInstructionsChange={setSpecialInstructions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JacketCustomizer;
