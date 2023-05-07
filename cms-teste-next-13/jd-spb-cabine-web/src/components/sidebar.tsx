import Image from 'next/image'
import img_notification from './../assets/icons/notification-white.svg'

export default function Sidebar() {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 side-bar">
          <div className="w-100 notificacao d-flex align-items-center justify-content-center" role="button">
              {/* <Image src={img_notification} alt="notification" />
              <span className="position-absolute ms-3 mb-2 icon-notificacao">&nbsp;</span>  */}
          </div>
      </div>
    </>
  )
}