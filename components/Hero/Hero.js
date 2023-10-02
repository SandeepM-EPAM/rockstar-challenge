
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

      <section itemid="urn:aemconnection:/content/dam/rockstar/cfs/home-page/jcr:content/data/master" itemtype="reference" itemfilter="cf" itemscope="">

            <div>
              <div width="100%">
                  <div itemprop="pageContentImage" itemtype="media">
                    <img
                      src={pageContentImage}
                      width="100%"
                      height="200"
                    />
                  </div>
              </div>
            
              <br></br>
              <h3 className="font-semibold text-gray-700">
                  <div>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <h3 itemprop="pageContent" itemtype="text">{pageContent}</h3>
                  </div>         
              </h3>
            </div>

      </section>
    </div>
  )
}