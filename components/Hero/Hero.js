
import Link from 'next/link'

export default function Hero({ pageContent, pageContentImage }) {
  return (
    <div className="group relative">
      <div width="100%">
        <img
          src={pageContentImage._publishUrl}
          width="100%"
        />
      </div>
      <h3 className="font-semibold text-gray-700">
          <div>
            <span aria-hidden="true" className="absolute inset-0" />
            {pageContent}
          </div>
      </h3>
    </div>
  )
}