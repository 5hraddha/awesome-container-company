import React from 'react';
import SectionHeading from './SectionHeading';
import SectionPara from './SectionPara';
import chart from '../images/single-use-plastics-chart.png';
import plasticsBadEffects from '../utils/plastics-bad-effects';

function BadEffects() {
  const renderImages = () => {
    return (
      plasticsBadEffects.map(({caption, image}, index) => {
        return (
          <figure className="max-w-[346.47px]" key={index}>
            <img src={image} alt={image} className="object-cover" />
            <figcaption className="pt-[20px] text-sm text-secondary-100 leading-4 text-center">
              {caption}
            </figcaption>
          </figure>
        );
      })
    );
  }

  return (
    <section className="bg-primary">
      <div className="mx-auto px-[100px] py-[120px] max-w-[1440px] flex flex-col items-center">
        <div className="w-full flex gap-x-[73px]">
          <div className="max-w-[347px] rounded-[20px]">
            <img className="object-cover" src={chart} alt="donut chart to show single-use plastics wastage" />
          </div>
          <div className="mt-[56px]">
            <div className="max-w-[708px]">
              <SectionHeading align="left" color="secondary">
                Single-use packaging:<br/> bad for the planet, bad for business
              </SectionHeading>
            </div>
            <div className="pt-[40px] max-w-[627px]">
              <SectionPara align="left" color="secondary" lineHeight="6">
                Millions of tons of single-use packaging <span className="text-highlight-100">end up in landfills and oceans</span> while only
                <span className="text-highlight-100"> 9% of single-use waste gets recycled</span>. Meanwhile, single-use containers are expensive
                and restaurants need to track inventory / restock weekly.
              </SectionPara>
            </div>
          </div>
        </div>
        <div className="mt-[80px] w-full flex justify-between">
          {renderImages()}
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default BadEffects;
