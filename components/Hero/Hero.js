
import Link from 'next/link'

export default function Hero({ pageContent, pageContentImage }) {
  return (
    <div className="group relative">
      {/* <div width="100%">
        <img
          src={pageContentImage._publishUrl}
          width="100%"
          height="400"
        />
      </div> */}
      {/* <div width="100%">
        <img
          src="https://t4.ftcdn.net/jpg/01/57/88/65/240_F_157886508_2uBRNXKudUELMZZiW17FLKi8uJtwwLsp.jpg"
          width="100%"
          // height="200"
        />
      </div> */}
      <div width="100%">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/57/88/64/1000_F_157886497_SYZak9YTugvDAw9CDpvzIqJyQsnVq7R8.jpg"
          width="100%"
          height="200"
        />
      </div>
    
      <br></br>
      <h3 className="font-semibold text-gray-700">
          <div itemscope itemid="urn:aemconnection:/content/dam/rockstar/cfs/home-page/jcr:content/data/master" itemtype="reference">
            <span aria-hidden="true" className="absolute inset-0" />
            {pageContent}
          </div>
      </h3>
    </div>
  )
}