
export default function Footer() {
  return (
    <div>
        <footer className="col-12 d-flex flex-column align-items-center pt-3 text-white rounded-top">
        <div className="footer-top col-12 d-flex justify-content-between p-4 ps-5 pe-5">
            <div className="footer-logo d-flex flex-column gap-3 col-3">
                {/* <img className="img-fluid footer-img"  src="./assets/img/Logo.png" alt="footer-logo"> */}
                <p>منصة متخصصة تقدم حلولًا واستشارات مبتكرة في المجالات المالية، الإدارية، والاقتصادية</p>
            </div>
            <div className="list pt-3 col-3 list-one">
                <ul className="list-unstyled d-flex flex-column gap-4 ">عن البوابة المالية
                    <li><a href="./index.html">الصفحة الرئيسية</a></li>
                   <li><a href="./pages/our-blog.html">المدونة</a></li>
                   <li><a href="./pages/services.html">الخدمات</a></li>
                </ul>
            </div>
            <div className="list pt-3 col-3 list-two">
                <ul className="list-unstyled d-flex flex-column gap-4">المعلومات
                    <li><a href="./pages/about-us.html">من نحن</a></li>
                    <li><a href="./pages/Ask.html">تواصل معنا</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom col-12 p-4 d-flex flex-column align-items-center justify-content-center gap-4">
            <div className="social-links d-flex gap-5">
                {/* <a href="#"><img width="89%" src="./assets/img/facebook (2).png" alt="facbook-icon"></a>
                <a href="#"><img width="89%" src="./assets/img/twitter.png" alt="twitter-icon"></a>
                <a href="#"><img width="89%" src="./assets/img/linkedin-logo.png" alt="linkedin-logo"></a>
                <a href="#"><img width="89%" src="./assets/img/instagram.png" alt="instagram-icon"></a> */}
            </div>
            <div className="rights d-flex gap-2 align-items-center">
                <p>جميع الحقوق محفوظة للمنصة المالية</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
                  </svg>
                  <p>2025</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
