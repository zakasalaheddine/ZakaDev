import { motion } from "framer-motion";

const container = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: .3
    }
  }
}

const item = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}
export default function Logo({ className, width = 83, height = 51 }) {

  return (
    <motion.svg className={className} variant={container} initial="initial" animate="animate" width={!className ? width : ''} height={!className ? height : ''} viewBox="0 0 83 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variant={item} d="M13.125 38.9395H34.6289V46H2.13867V40.8438L23.2324 10.4629H2.16797V3.34375H34.1602V8.38281L13.125 38.9395Z" fill="#64FFDA" />
      <motion.path variant={item} d="M46.8086 46V3.34375H59.9336C63.6836 3.34375 67.0332 4.19336 69.9824 5.89258C72.9512 7.57227 75.2656 9.97461 76.9258 13.0996C78.5859 16.2051 79.416 19.7402 79.416 23.7051V25.668C79.416 29.6328 78.5957 33.1582 76.9551 36.2441C75.334 39.3301 73.0391 41.7227 70.0703 43.4219C67.1016 45.1211 63.752 45.9805 60.0215 46H46.8086ZM55.5977 10.4629V38.9395H59.8457C63.2832 38.9395 65.9102 37.8164 67.7266 35.5703C69.543 33.3242 70.4707 30.1113 70.5098 25.9316V23.6758C70.5098 19.3398 69.6113 16.0586 67.8145 13.832C66.0176 11.5859 63.3906 10.4629 59.9336 10.4629H55.5977Z" fill="#64FFDA" />
      <motion.path variant={item} d="M18.1384 24.9543C18.1384 28.4632 21.5831 31.7386 27.0135 33.585C25.9291 39.0152 26.8193 43.3922 29.7923 45.0976C32.8481 46.8506 37.4007 45.6372 41.7217 41.88C45.9337 45.4854 50.1906 46.9043 53.161 45.194C56.214 43.436 57.1424 38.7623 56.028 33.1624C61.6843 31.3024 64.8483 28.5094 64.8483 24.9543C64.8483 21.527 61.3974 18.5619 56.04 16.7275C57.2397 10.8962 56.2232 6.62553 53.127 4.84966C50.1421 3.13752 45.8357 4.6298 41.5618 8.32945C37.1154 4.40263 32.8516 3.20381 29.7587 4.98461C26.7765 6.70168 25.9256 11.1582 27.0135 16.6889C21.7663 18.5086 18.1384 21.5408 18.1384 24.9543Z" fill="#1D1D1D" />
      <motion.path variant={item} d="M54.9054 18.5491C54.4639 18.3985 54.0186 18.2589 53.57 18.1306C53.6444 17.8299 53.7132 17.5279 53.7764 17.2247C54.7872 12.3439 54.1263 8.41199 51.8693 7.11766C49.7053 5.87629 46.1662 7.17062 42.5917 10.2646C42.2395 10.5701 41.8951 10.8845 41.5589 11.2074C41.3337 10.9927 41.1045 10.7822 40.8715 10.5759C37.1255 7.2674 33.3706 5.87337 31.1159 7.17153C28.954 8.41637 28.3137 12.1129 29.2237 16.7384C29.3143 17.1965 29.4165 17.6521 29.5303 18.105C28.999 18.2551 28.4859 18.4151 27.995 18.5853C23.6032 20.1083 20.7984 22.4953 20.7984 24.9711C20.7984 27.5284 23.8092 30.0933 28.3838 31.6484C28.7547 31.7739 29.1288 31.8902 29.5055 31.9972C29.3831 32.4851 29.2745 32.9763 29.1797 33.4703C28.312 38.0154 28.9896 41.6243 31.1459 42.8615C33.373 44.1388 37.1108 42.8259 40.7505 39.6613C41.0382 39.4111 41.327 39.1458 41.6162 38.8676C41.9804 39.2172 42.3543 39.5565 42.7375 39.8853C46.2631 42.9029 49.745 44.1215 51.8994 42.881C54.1244 41.5998 54.8474 37.7229 53.9085 33.0059C53.8369 32.6456 53.7534 32.2777 53.6598 31.9029C53.9223 31.8259 54.1799 31.7463 54.4312 31.6634C59.1868 30.0962 62.2808 27.5625 62.2808 24.9711C62.2808 22.4864 59.3856 20.0832 54.9054 18.5491Z" fill="#64FFDA" />
      <motion.path variant={item} d="M53.8738 29.9903C53.6471 30.065 53.4143 30.1371 53.1771 30.2071C52.652 28.5539 51.9434 26.7959 51.0765 24.9799C51.9039 23.2068 52.585 21.4714 53.0954 19.8289C53.5197 19.9512 53.9316 20.08 54.3285 20.216C58.1673 21.5302 60.5088 23.4737 60.5088 24.9711C60.5088 26.5662 57.9799 28.637 53.874 29.9903H53.8738ZM52.1701 33.3483C52.5852 35.4341 52.6445 37.3199 52.3695 38.7941C52.1224 40.1187 51.6256 41.0018 51.0113 41.3555C49.704 42.1082 46.9082 41.1298 43.8933 38.5492C43.5476 38.2534 43.1994 37.9374 42.8502 37.6033C44.0191 36.3316 45.1873 34.8532 46.3273 33.2115C48.3328 33.0346 50.2274 32.7451 51.9456 32.3502C52.0301 32.6898 52.1053 33.0227 52.1701 33.3483ZM34.9406 41.2255C33.6634 41.6742 32.6461 41.6869 32.0313 41.3343C30.7227 40.5838 30.1789 37.6858 30.9208 33.799C31.009 33.3396 31.11 32.8828 31.2237 32.4291C32.9228 32.8029 34.8036 33.0718 36.8139 33.234C37.9615 34.8404 39.1634 36.317 40.3747 37.61C40.1173 37.8577 39.8538 38.0991 39.5844 38.3339C37.9749 39.7334 36.3621 40.7261 34.9408 41.2255H34.9406ZM28.957 29.9805C26.9342 29.2927 25.2638 28.3991 24.1187 27.4239C23.0899 26.5474 22.5704 25.6773 22.5704 24.9711C22.5704 23.4688 24.8224 21.5523 28.5784 20.2498C29.0498 20.087 29.526 19.938 30.0062 19.8029C30.5253 21.4824 31.2063 23.2384 32.028 25.014C31.1956 26.8162 30.505 28.6001 29.981 30.2993C29.6371 30.2014 29.2956 30.0951 28.957 29.9805ZM30.9628 16.3998C30.1831 12.4367 30.7008 9.4472 32.0038 8.69705C33.3917 7.89795 36.4603 9.03743 39.6947 11.894C39.9014 12.0766 40.1091 12.2678 40.3171 12.4655C39.112 13.7527 37.9211 15.2182 36.7834 16.8153C34.8325 16.9951 32.9648 17.284 31.2479 17.671C31.1422 17.2497 31.0471 16.8258 30.9628 16.3997V16.3998ZM48.8564 20.7947C48.4509 20.0979 48.0303 19.4099 47.595 18.7312C48.9186 18.8974 50.1867 19.1183 51.3774 19.3888C51.02 20.5284 50.5744 21.7201 50.0497 22.9418C49.6663 22.2183 49.2685 21.5024 48.8564 20.7947ZM41.5594 13.7252C42.3767 14.6059 43.1953 15.5894 44.0006 16.6564C42.3672 16.5796 40.7311 16.5793 39.0977 16.6553C39.9036 15.5982 40.7292 14.6161 41.5594 13.7252ZM34.2156 20.8067C33.8087 21.5088 33.4183 22.2203 33.0447 22.9405C32.5286 21.7231 32.0871 20.5261 31.7265 19.3702C32.9101 19.1067 34.1723 18.8914 35.4873 18.7279C35.0471 19.4109 34.6231 20.104 34.2156 20.8067ZM35.5251 31.3402C34.1666 31.1893 32.8853 30.985 31.7021 30.7288C32.0684 29.5524 32.5196 28.3297 33.0467 27.0861C33.4218 27.8069 33.814 28.5187 34.2228 29.2212C34.6399 29.9377 35.0741 30.6442 35.5251 31.3402ZM41.6084 36.3416C40.7685 35.4401 39.9308 34.443 39.1126 33.3706C39.9068 33.4016 40.7166 33.4173 41.5396 33.4173C42.3852 33.4173 43.221 33.3985 44.0437 33.362C43.2359 34.454 42.4202 35.4525 41.6084 36.3416ZM50.0666 27.0227C50.621 28.2798 51.0884 29.496 51.4596 30.6525C50.2568 30.9255 48.9583 31.1453 47.59 31.3086C48.0285 30.6172 48.4531 29.9171 48.8636 29.2089C49.2808 28.4892 49.6819 27.7603 50.0666 27.0227ZM47.3284 28.3284C46.7 29.4142 46.0363 30.4793 45.3383 31.5222C44.1076 31.6097 42.8357 31.6548 41.5396 31.6548C40.2488 31.6548 38.9931 31.6148 37.7838 31.5368C37.0677 30.4964 36.3914 29.4294 35.7564 28.3381C35.1244 27.2526 34.5341 26.1436 33.9867 25.0135C34.5327 23.8831 35.1212 22.7735 35.7511 21.6871V21.6875C36.3808 20.6008 37.0517 19.5384 37.7625 18.5024C38.9962 18.4096 40.2611 18.3611 41.5398 18.3611C42.8241 18.3611 44.0907 18.41 45.324 18.5035C46.0276 19.5379 46.6942 20.5966 47.3227 21.6778C47.9548 22.7618 48.5512 23.8659 49.111 24.9885C48.5569 26.1225 47.9624 27.2365 47.3286 28.3284H47.3284ZM50.9842 8.64464C52.3732 9.44154 52.9135 12.6549 52.0407 16.869C51.9835 17.1435 51.9213 17.417 51.8542 17.6892C50.1332 17.2943 48.2643 17.0003 46.3077 16.8177C45.1678 15.2032 43.9868 13.7352 42.8012 12.4646C43.1119 12.1667 43.4299 11.8765 43.7551 11.5943C46.8177 8.9432 49.68 7.89649 50.9842 8.64464Z" fill="#1D1D1D" />
      <motion.path variant={item} d="M41.5396 21.2867C43.5855 21.2867 45.2438 22.9363 45.2438 24.9711C45.2438 27.0061 43.5855 28.6558 41.5396 28.6558C39.4939 28.6558 37.8354 27.0061 37.8354 24.9711C37.8354 22.9363 39.4939 21.2867 41.5396 21.2867Z" fill="#64FFDA" />
    </motion.svg>
  )
}