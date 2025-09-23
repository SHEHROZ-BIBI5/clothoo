 import design from '../assets/Design/images.png';

const featureItems = [
  { title: 'Wool Body Color:', desc: 'Pick from a full range of bold and classic colors.' },
  { title: 'Sleeve Material:', desc: <>Choose from wool, vinyl, or <a href="/products/varsity-jackets/wool-leather-varsity-jackets" className="text-blue-500 hover:underline font-normal">genuine leather sleeves</a> — it&apos;s your call.</> },
  { title: 'Ribbed Cuffs:', desc: 'Match your style with striped cuffs and knit trim options.' },
  { title: 'Add Patches:', desc: <><a href="/varsity-jackets-patches-embroideries" className="text-blue-500 hover:underline font-normal">Add custom patches</a> on the chest, sleeves, or back.</> },
  { title: 'Customize Style:', desc: 'Pick your collar, cuffs, and hem for the perfect look.' },
  { title: 'Size Options:', desc: 'We offer XS to 6XL, plus tall sizes for a perfect fit.' },
];

const Design = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
        Design Your Own Varsity Jacket
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center mb-6">
        Build your custom jacket for schools, teams, and brands. Crafted from quality materials with the perfect fit you deserve.
      </p>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src={design} 
            alt="Design" 
            className="w-[450px] h-auto object-cover" 
          />
        </div>

        {/* Text + Buttons */}
        <div className="flex flex-col justify-between w-full md:pl-4">
          
          {/* Features */}
          <div className="space-y-3  text-sm">
            {featureItems.map((item, index) => (
              <div key={index}>
                <h6 className="font-medium flex items-center gap-2 text-gray-800 text-sm">
                  <span className="text-green-500">✔</span> {item.title}
                </h6>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="/design-your-own/"
              className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 transition text-center"
            >
              Design Your Own Now
            </a>
            <a
              href="/jackets-materials"
              className="bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 transition text-center"
            >
              Quality Materials & Colors
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Design;
