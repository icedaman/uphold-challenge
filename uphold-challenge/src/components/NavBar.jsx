
const NavBar = () => {
  return (
    <div className="w-full h-[100px] flex">
      <div className='w-[25%] h-full  flex  items-center justify-around text-base font-semibold text-slate-400 pl-10'>
        <span>Personal</span>
        <span>Business</span>
        <span>Partners</span>
      </div>
      <div className='w-[50%] h-full'>
        <svg className="w-[200px] mx-auto mt-[20px]" viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.7493 26.39C13.6084 25.9 13.1015 25.62 12.6227 25.76C11.7778 26.012 10.961 26.138 10.1583 26.138H10.0457C9.24301 26.138 8.41217 25.998 7.56725 25.746C7.08846 25.606 6.5815 25.886 6.44068 26.376C6.29986 26.88 6.56742 27.398 7.04621 27.538C8.04603 27.846 9.05994 28 10.0457 28H10.1583C11.1441 28 12.1439 27.846 13.1437 27.538C13.6225 27.398 13.8901 26.88 13.7493 26.39ZM18.4245 16.072C19.7904 12.866 20.1003 9.422 19.2412 6.846C19.2412 6.832 19.2413 6.832 19.2553 6.832V6.818C17.9598 2.73 14.2985 0 10.102 0C5.89148 0 2.21607 2.758 0.934608 6.846C0.0756038 9.408 0.371327 12.866 1.75137 16.072C3.62428 20.454 7.03213 23.492 10.0457 23.492H10.1302C13.1437 23.492 16.5516 20.454 18.4245 16.072ZM14.8477 19.068C15.6926 18.046 16.453 16.814 17.0444 15.442C18.2696 12.572 18.5512 9.54801 17.819 7.33601C17.4247 6.16001 16.7628 5.33401 15.9038 4.92801C14.5801 4.28401 12.848 4.74602 11.1863 6.11802C12.2425 7.30801 13.1578 8.75001 13.8478 10.36C15.1575 13.44 15.4532 16.618 14.8477 19.068ZM2.34281 7.32201C1.59646 9.53401 1.89218 12.572 3.11732 15.442C3.70876 16.828 4.46919 18.06 5.31411 19.054C4.6945 16.604 4.99023 13.426 6.31394 10.346C7.00396 8.73601 7.91929 7.28001 8.97544 6.10401C7.32784 4.73201 5.59575 4.28401 4.25796 4.91401C3.39896 5.32001 2.7371 6.16001 2.34281 7.32201ZM10.0879 21.952C10.5245 21.952 10.9469 21.854 11.3271 21.672C13.9042 20.44 14.4252 15.554 12.4678 10.99C11.8482 9.53401 11.0314 8.23201 10.0879 7.18201C9.14443 8.24601 8.32767 9.53401 7.70806 10.99C5.75066 15.554 6.27169 20.454 8.8487 21.672C9.22892 21.854 9.65138 21.952 10.0879 21.952ZM10.0879 5.05401C11.6369 3.71001 13.2986 3.03801 14.8195 3.10801C13.4676 2.11401 11.8341 1.55401 10.0879 1.55401C8.34175 1.55401 6.69415 2.11401 5.35636 3.10801C6.87722 3.05201 8.5389 3.72401 10.0879 5.05401Z" fill="#84FB7F"></path><path fillRule="evenodd" clipRule="evenodd" d="M34.3188 17.4904V18.6074C34.3188 18.7205 34.4036 18.8054 34.5307 18.8195H36.2257C36.3387 18.8195 36.4235 18.7347 36.4235 18.6216V9.10564C36.4235 8.99253 36.3387 8.90769 36.2257 8.90769H34.5307C34.4177 8.90769 34.3329 8.99253 34.3329 9.10564V15.8644C33.8527 16.5148 32.9345 17.1511 31.8893 17.1511C30.6886 17.1511 29.94 16.6562 29.94 15.115V9.0915C29.94 8.97838 29.8553 8.89355 29.7423 8.89355H28.0472C27.9342 8.89355 27.8495 8.97838 27.8495 9.0915V15.9068C27.8495 17.9146 28.8806 19.0458 30.9429 19.0458C32.4543 19.0458 33.6408 18.2681 34.3188 17.4904ZM41.2644 22.3827V17.4338C42.0554 18.4802 43.1289 19.0458 44.3437 19.0599C46.8297 19.0599 48.5954 17.1086 48.5954 13.8424C48.5954 10.5762 46.8297 8.65318 44.3437 8.65318C43.0866 8.65318 41.9848 9.26118 41.2644 10.2509V9.0915C41.2644 8.97838 41.1797 8.89355 41.0667 8.89355H39.3716C39.2586 8.89355 39.1739 8.97838 39.1739 9.0915V22.3827C39.1739 22.4958 39.2586 22.5807 39.3716 22.5807H41.0667C41.1797 22.5807 41.2644 22.4958 41.2644 22.3827ZM57.236 18.6074C57.236 18.7205 57.3207 18.8054 57.4338 18.8054L59.1288 18.7912C59.2418 18.7912 59.3265 18.7064 59.3265 18.5933V11.778C59.3265 9.74192 58.2954 8.63904 56.2331 8.63904C54.7217 8.63904 53.4928 9.44499 52.8572 10.2227V5.31624C52.8572 5.20312 52.7725 5.11829 52.6594 5.11829H50.9644C50.8514 5.11829 50.7667 5.20312 50.7667 5.31624V18.6074C50.7667 18.7205 50.8514 18.8054 50.9644 18.8054H52.6594C52.7725 18.8054 52.8572 18.7205 52.8572 18.6074V11.877C53.3375 11.2124 54.2415 10.562 55.315 10.562C56.4874 10.562 57.236 11.0145 57.236 12.5698V18.6074ZM66.5204 8.65318C63.4693 8.65318 61.6048 10.9862 61.6048 13.8424C61.6048 16.6703 63.4834 19.0458 66.5204 19.0599C69.5714 19.0599 71.4359 16.6703 71.4359 13.8424C71.4359 10.9862 69.5714 8.65318 66.5204 8.65318ZM73.5567 5.31624V18.6074C73.5567 18.7205 73.6556 18.8054 73.7545 18.8054H75.4495C75.5625 18.8054 75.6473 18.7205 75.6473 18.6074V5.31624C75.6473 5.20312 75.5625 5.11829 75.4495 5.11829H73.7545C73.6415 5.11829 73.5567 5.20312 73.5567 5.31624ZM85.0708 17.448V18.6074C85.0708 18.7205 85.1697 18.8054 85.2685 18.8054H86.9636C87.0766 18.8054 87.1613 18.7205 87.1613 18.6074V5.31624C87.1613 5.20312 87.0766 5.11829 86.9636 5.11829H85.2685C85.1555 5.11829 85.0708 5.20312 85.0708 5.31624V10.2651C84.308 9.19048 83.2063 8.63904 81.9915 8.63904C79.5196 8.63904 77.7398 10.6327 77.7398 13.8283C77.7398 17.1228 79.5479 19.0458 81.9915 19.0458C83.2487 19.0458 84.3363 18.4378 85.0708 17.448ZM43.7222 17.1511C45.3607 17.1511 46.4342 15.7654 46.4342 13.8424C46.4342 11.9053 45.3607 10.562 43.7222 10.562C42.7476 10.562 41.7447 11.1418 41.2644 11.877V15.7937C41.7164 16.5289 42.7476 17.1511 43.7222 17.1511ZM66.5345 17.1511C68.3142 17.1511 69.2889 15.6099 69.2889 13.8424C69.2889 12.0891 68.3142 10.562 66.5345 10.562C64.7688 10.562 63.7801 12.1032 63.7801 13.8424C63.7801 15.6099 64.7688 17.1511 66.5345 17.1511ZM82.613 17.1369C83.5877 17.1369 84.6188 16.5431 85.0708 15.8078V11.877C84.6188 11.1418 83.5877 10.5479 82.613 10.5479C80.9463 10.5479 79.901 11.9194 79.901 13.8283C79.901 15.7654 80.9463 17.1369 82.613 17.1369Z" fill="#27f900"></path>
        </svg>
      </div>
      <div className='w-[25%] h-full flex items-center justify-end pr-28'>
        <button className="px-10 py-2 rounded-full bg-green-500 text-white">Log In</button>
      </div>
    </div>
  )
}

export default NavBar