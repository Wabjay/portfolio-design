import { ArrowBack, ArrowForward, Download } from '@mui/icons-material';
import React from 'react'

function Links({link, text, arrow,back, download}) {
  return (
    <a
      className={`${(arrow || download) && 'nav'} inline-flex items-center font-medium leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"`}
      aria-label={text}
      href={link}
    >
      <span>
        {/* <span className=" pb-px   ">
        View Full
      </span> */}
        <span className="whitespace-nowrap">
        {back && <ArrowBack />}
          <span className="pb-px">{text}</span>
          {arrow && <ArrowForward />}

          {download && <Download />}
        </span>
      </span>
    </a>
  );
}

export default Links