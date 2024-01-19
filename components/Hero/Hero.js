
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

      <section data-aue-resource="urn:aemconnection:/content/dam/rockstar/cfs/home-page/jcr:content/data/master" data-aue-type="reference">

            <div>
              <div width="100%">
                  <div data-aue-prop="pageContentImage" data-aue-type="media">
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
                      <h3 data-aue-prop="pageContent" data-aue-type="text">{pageContent}</h3>
                  </div>         
              </h3>
            </div>

      </section>
    </div>
  )
}