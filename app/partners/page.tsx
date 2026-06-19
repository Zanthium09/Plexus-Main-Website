import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Technology Partners | Authorized Partner of Avaya, Cisco, Hikvision, Bose",
  description:
    "Plexus Tele-Solutions is an authorized partner of world-leading technology brands including Avaya, Cisco, Hikvision, Dahua, Bose, Poly, Panasonic, Matrix and Legrand. Explore our partner ecosystem.",
  keywords: [
    "Avaya partner India",
    "Cisco partner India",
    "Hikvision authorized dealer",
    "Dahua partner",
    "Bose pro audio India",
    "Poly video conferencing",
    "Panasonic security systems",
    "Matrix Comsec partner",
    "Legrand structured cabling",
  ],
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Technology Partners | Plexus Tele-Solutions",
    description:
      "Authorized partner of Avaya, Cisco, Hikvision, Dahua, Bose, Poly, Panasonic, Matrix and Legrand.",
    url: "/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Technology Partners | Plexus Tele-Solutions",
    description:
      "Authorized representatives for the world's leading communication, AV and security brands.",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5YUHCJ8dB8nUfzZnY2BsG6DjhrB7gVuCvezH_xaWrLMwLoRAlJP_ddE_XOVwBHcS5M0vu-pniDkRF9MrllgIgQzds4gQK6WcvYoWYViwNH41rq4uZfqikBvXIKjUucOWAn0CoAC87c5wtIppkd3NNWQK0TO7jCGMMdqdBt1_winWp5WUt6vjlJRBpW-VK9EqUkk7iMTk3FEcMjb7gHrwtKTeMNkXI7dVu9EHV4P_p2mbkitN29wxt9E2Uzm00JxnhGtb4YO9MuGmO";
const ctaImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_L6moKSA0i2zgsb2fa5_EzvCAMlR2npAXuAIMXM2BSmZ6zWSlRox3O6QxJiJvw9YtRyWLLbOyKylBl4kKw2ywcx4aTeOVf3Y5cG9fOcjfh-CBunZ9nllw2HNGBzINU8ZuWxrpFYldsfTsZkvGf6gwgxBSU1UzGSBVh9IEsGV7yiIeaaontMks3Z5CmgrtyzP6EseorcWXJX9O3Mm52vBef4HcGesZU4eQMezJoJlF_-ED1vgfKU1aCAUsNDptpU2aMwwnKe4R0K9";

const PartnerCard = ({
  name,
  tier,
  tierStyle,
  img,
  dark,
}: {
  name: string;
  tier: string;
  tierStyle: string;
  img: string;
  dark?: boolean;
}) => (
  <div
    className={`p-8 flex flex-col items-center group transition-all duration-300 ${
      dark
        ? "bg-white/5 hover:bg-white/10 border border-white/10"
        : "bg-white border border-outline-variant hover:shadow-lg"
    }`}
  >
    <div className="h-20 w-full flex items-center justify-center mb-6">
      <Image
        src={img}
        alt={name}
        width={120}
        height={48}
        className={`max-h-12 object-contain ${
          dark
            ? "invert opacity-70 group-hover:opacity-100"
            : "grayscale group-hover:grayscale-0"
        } transition-all`}
      />
    </div>
    <span className={`font-label-caps text-[10px] px-2 py-1 rounded-sm ${tierStyle}`}>
      {tier}
    </span>
    <h3 className={`font-h3 text-sm mt-4 text-center ${dark ? "text-white" : ""}`}>
      {name}
    </h3>
  </div>
);

const telecomPartners = [
  { name: "Panasonic", tier: "Platinum Partner", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6B4n1VWhWdKlqsoy9FPzU-TCGXi4lV30OhTU9oBpbgp5lcTbgz-lMMtWQ1Id-niFb4Udi-1DomS-jUDyY3zL7TTYHcF_97S3r7QXwVbsQ8gg7vV6DLEdDIE1Y_Mu6uekArsS00RKwsN7pgZJsjEw9iBFFobjE_te5aYXGbQEqH0ZHWLiBGEjbmKDemsK5oJQhbO1BT-w-fZKNdnrUufGORd8MpdqqCJ4N-28O7MvfrQ65DQA3cp2GsPnZTAh5o9Kmbn8kTM66nzY3" },
  { name: "Avaya", tier: "Authorized", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL0cNQDu-OGNQTe6SUvWhygt_mttXsnNNzNgwB_-g5eu78FSwreIip0_I5oeOoOJDny99qKJ3vBh0c3WrgmMHRfHjv34O_nWIOVbxYH67mBZ2JSFE0yn0kuBmomLvDQrXUQ_FYCkvh0nzZAZDpbP0qD3NM9nrnTBgUsjoowkdayQs1YWCc838PSBw-tMG_yLTqvtcE6z3g_tWWvJu0RthQfqeWu0og8_g5EKKBBEEbqaKG4nHHuQ4MT5flNex6gH9WcAhh0w98A_XF" },
  { name: "Poly", tier: "Gold Partner", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0_4ModusNCmX228B86EjrLlGR4wSV5ko722DS0eD86TdH7OwCL8Ap-Hs0K4WxhM7NIHPz9lo-ONqrQwNq-oK36236ZxKR1_8jmtdi-qy8uRL5nRN-TbL8KNW74hSa9mmwKbd1kc3IG7FRviZNqlosFLScwyvvLRbnkKRifywPxWYMlI5lDNcAhqhp75EErDxr-fEhZOIysACt5E1bPRRSMfjYCUEBW8w6AXWIa2A6Nl7O_1voi0CNR_BFz8hvb7V4JLD3QNM8EobP" },
  { name: "RingCentral", tier: "Service Provider", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBrZKVBoS6_-t8zn_mTeQ2zKK4ULMoYoZrs0f8KQVAPp4tscBKyAnKQB2uqEEkCqcW3AB4-b12FQZM7QU5uJJP9icYjcPB4tG6Wi_7B9QNdwRgGRQazRoQao8-tCBRSrkZq184Iboe6esYf-nmvgyLNaDTrJjW1ctPeG6WoYG08wtAk-vmFEpYZ8_AXWtP5W46A_ziGtRjzzKudo_x6sD-zvBakB8qGXa94kCRh_4naXtl3uIN3iLNi28utPeI8PdP65D1hhsxfje2" },
  { name: "Yealink", tier: "Authorized", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtx-p-_YOIvKF0GISP8_SRba_V04a3TYx7Q3KD0B7VHKtJoSRcY7ioEK7vQvoK3YevQsSRGuWJF7CoN-P9e2kBS3LuEg0loPEhCfVeZmbeQarPdRli45GF51alwYZWwVFk3IVsDnkJ6DVEfqA2UKfdDZqMUwksxb_xdRUqypzkn9XdLp84BXFBNW3UfvK0nje-nIc8Ck2OxJfuaaJNZN8Rzq5O8cnfRGau8WsA6ftYvzRI-4VbvFkAMcDdW6ltag7C9NAl9s8cr_lH" },
];

const avPartners = [
  { name: "Bose", tier: "Professional Integrator", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbdSCT8Pkpqh6iyQdDxwY5RuxcnXEi1bipgqeY4lUlloQnu0REJnaoLqmb_U8irB8RMfPxXoJ1q12J4pcd12_-lAMXKzwebUWERu_P4EvSrQZz74WfnOZtogreEaGwQOkcAIwSKRMmrEtNeVprwnnLB6Q7xbf-w_UUlLsecb49V1MFTQdmzx2RkHvpzGC8GI-0ywg3VX6meISbJrfZzoEd_F56ZgSSGsOUfF7-fdhvGFA9-uM5bdiiiHRPuOSJY-n84oAB61GVIEZ9" },
  { name: "Crestron", tier: "Certified Elite", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1z1YemiNoFKVQbfylGz5T3mZfSVdykvTwvUPjr0tT5eqh4fumMVg3n49nnX-a_zDjcRQFfQZ7Cl88mQzLN-Xjo-dvBMIZaD5GDxCpAt0zH6d29pkjM5N7YLJj3dIaNgHzbo6q6-SykjBMTP2xlioaYODoF4EZoBjG94Fc44g2nXonP2ZjS8lXRlB4hNTxGZxnA7maYDClr4-aBywSFgqVGfE6GwqO3JaUA9_KqIP879yDSgk1EgnjY7Yf6H9chwmC20bqZbG2jh_S" },
  { name: "Samsung", tier: "Display Partner", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj1pU2WcB8QKspnNQ-7KlS2pn6gAuYsv2hmYAdzjXiU8Eu34-W8Yj0d8kP7YIEH1tdvi_j5TNeu_MRyulFdeBJZPWB1yrHKqBJbKTzvQItFrDlZg6GWKH_WyGMYoqiR4VLNUVAFXX3pPGI07HEhCLS0yCAIDvtuHYi82QRyHZ3JI1eRtGCFXkFlMuvryBeJx9PJyfBlH4OYGO5hjoXwM-AiI4waefr1daZrtt9AXJChPaiGqjdEsVT6aZDg9W8n4q3iuK09_ztQDJt" },
  { name: "Biamp", tier: "Authorized", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX_9peizZQx03t5pbpYkd1e08hwrF1yG_bhkm4M6kw31N3xYwPODCd9EXbFC2PyVYvljzc4GtNWKtGx8zTdU2I4VrgaZ88cMRRSwhuewvle1KD-na2c_el1s-N3ks7iyplFhXKtGWN0xwMdTBu95quWSYvd2TVUyzx3iZpbB3t4aSXKPxB0zWU0qTauwS8SQqcyadrLRMOwEE26cpNExFemkGC-GaOVWYu4Ny33nPts21zPf3DdNJASmS9oGou51jYNJFvGwi4vGN6" },
  { name: "Kramer", tier: "Authorized", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDko8D_aP0Nr76m-dnIlLYBESt0DSWZxXGOUd9dKd1pW6mRkSbHhAhij0yNEsM3T2-XPJ9jHCLv7wjZRJyn2-IkcP3_uysCBhHPKhVBDw32BUPsaHsTKnBetwdFhoRq9jtJXB-TUpkS_iMNqfZ8GAtSKnXYiXkv3IbfGlgZfiyXjBxMFfwjcDu3VBmm0XJoat9YHKRGqVbIEbwPMuLP6VSVi-66EgpuRkZpzcSqPuOZR_IOVq5eR-B9Bf--D9gLm4h6y-hcR4Pe2rPW" },
];

const securityPartners = [
  { name: "Hikvision", tier: "Strategic Partner", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRrSVKYGu_Zc5p3KN6H1AXQUFuFdo6qE4mVdqtmGS0cIpWCKsF-RX5yWIQlyHnFr30NFZpO2EjHLzRfhYEfRlIR0qjcs4IvQKWPfbeFfJ8TQBhlVF5xXWf63ygAJkWUWlY2uIZtoSRBmnjACZItODl9IlmEL1PRz1SlI_4dh5YPu0LrvGRM91-k_L-RfO6XOCw9hN8pISv3yGeSoCp5dGKz2WAYbYxoyk9VbHfB0I-LcQtbDoYckgh3sUFIURV7Yne8-2c8CFl4thp" },
  { name: "Axis", tier: "Gold Partner", tierStyle: "text-on-tertiary-container bg-tertiary-fixed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8zt5CplFhgpemx2o5qionl55p_Slh_siMLkeIBIhRXV13q0A1rgGKmaxkAQ1oGUj3l9y_4RhnHT1ZfmBF__ZEn_YnZ180NP5qDXZrDp-kYA258hQpAiznDu0QQP9g3G1-bmMJQ11oT3GQyUiH11rA_iN2mKP7j9-z37ZxLV0KsG-sZ-VXFnWVVwE3VdRTV1xE9N_uidAYVxF_2BO1Ta7M8oqqMTFtZghdtzOITojMZPYoFwhK9Rlz7xDl6WWV2WXTrRbpw_3EPQIK" },
  { name: "Dahua", tier: "Authorized", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvNS4J9x2OpIGhsjrwcXlu5IJtzoxM9y-NFQUNK-fMs38yFpsd2TV9JsBFQ2aCM5b_AKHi7aWCQQanFWaQbWv0FKVsxtvCRLQ2P9j71VySMxdpxsC5RYZ4m79M_3M2MGUM8M4tmSWzKK9mJuvmorc4oeRbffUVgAFxHoNXSXIpVK-a5biNENxOF6Qmb_xwCez4Zq-i7Bh4MR3KAGB-WaPSfYcJ4zMp5iPM6RkHv99kJKjzqALlnUdp554rASuFaLDRm8M_03Im_rcu" },
  { name: "Milestone", tier: "VMS Expert", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATxxbHicvyMFoynfDMYQjbisI3xLj4pQyDf08MGVun_eAVsibAV__cBl7NrOP9lckjgACxtMRHE3ugU2R19IvCAZttCFfb4PPrK0Mr6LsWz1DUGDuUeSKYtwBLdSNeQ1xklZQsY7XBJUN206Pm3-Ca2Cbwc_sDgIjIBIbhQ6m0HagWogY5xvXQYE78X9s8wqjW1YBeI349DqnVXIOI5u4YUf4sqmcIOsWQf4b8xhSxfTSrEuUGcNWypedW0nsF-62lUntHL6p7KjzQ" },
  { name: "HID Global", tier: "Access Control", tierStyle: "text-on-surface-variant bg-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDcNt1w0duxAw3s_-pn2iNW_jnGvYNhwUcmDSk6ecnS3uDWFMyU8OVTMymgU3HKOoJY3ObQKVc0D3m6USsw5PwtW-Ro3asXgYLod16XzrLN98R6yIaR2V6W_Y0TLlWH48i1ATmcsNlbrXXccPTO1bRYCB2wgWUSP4bUdgXB96O--rI6cdBCAI9StxFXj1FSqGIfFQj_DlJeHGQ925i5Ar4pHja5aLauxxwzL_S3B41Kpf6TVp0TSHj29hpx75XnZ0v0NaHwlMAtwn" },
];

const networkPartners = [
  { name: "Cisco", tier: "Premier Partner", tierStyle: "text-tertiary-fixed bg-tertiary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeazIvSGi96XCPYKfd21pc4CAp9wvSRO_tjD6RtENwXIS2XdBPzfxV5qmpgc1nj9Te0ylKxHVTpGoRD_0Y27gXVXQPE38vIhUNsZoUwQe_1-NBmW_2Qhw02gmgRtLQRNO7q4lUUIQMZGDpJW6MJRmFi-MIQ_lB9lM6B9n-YHl4GE8ahd1dxT9SWO3ryUMAU4ZFCr5yhs9m7sM6JJV2r8pkxQUSUyWls2UX9PgrYRBwxWHQq_q6WFhtxVrxU_Xtt1LuWRMJrPaQhRAY" },
  { name: "Aruba", tier: "Enterprise Partner", tierStyle: "text-tertiary-fixed bg-tertiary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzsXBZlMacIz_FGF1eUeDkkvCMj5ykDs6slp3vgSHIF0hcPL5nIbf-EEENjwsQiiMSkZFeV1o7AjowCykKllFoTgB0SVSh04I2vXefZZfvhgev9_FXX3Jqa_0EMSQtWIQBKUOs-XGbj_QL40MMRdZ2tMBLvxQ9vM2Ez_jVWn117_1cnCDI_4DeJIcCRm_bIP4zx67LkI-myoaCn52WkrIzUrkJFaAzb_30Xu1QJi3VBFSZwcs63PeFyAgljtQofeDX2UNOlncoGHih" },
  { name: "Ubiquiti", tier: "Direct Integrator", tierStyle: "text-slate-300 bg-white/10", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVSATgzfAfXbVWAXklGLKBvRsaaOYj1WJ6fqLndjzn8JM1RM23xNwronpojuaS9IBEAWyb-LphVTecECb6Brl4Ag0kI1ujzrivQfAhrphzy3N9bTaeLbjSdcec9xkkNo0IuFsdKACrA7Tp7gfsQ9vkKx9G299YCeaD4vAtDkueGiisI-wuEQiyVOIPg8fgtZaD7iEgopkz3BSnA6NvDKIgdyHVy8jlaiRWmpmWyixHdPRbNh8YMvhK-mJD4ylD6LX620AlYVdCXR3d" },
  { name: "Juniper", tier: "Authorized", tierStyle: "text-slate-300 bg-white/10", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOrIbM4qftEfbkkZ-SeuvvOBSk_nYQ8mr7Ppv5zoXBgwG9l4kLID7NLvko3n4Hi0VB0R4ewhgMMIGhmFFt-SelS0GJWvkRtDGGc5Eif6emPi2IwgiNcRTeZZiUYkEpATv1_7pRxYweZDm_rsD4DF7KHyv_VpYsCVrIYdBP8GJ5YAT32_qt0BLqQ3MeHqOtvJDVxMP8igsx5_k_Rh-QR3N3Z2R7FcAYk4WTrsbLYL5iTcV0kGXbDRgL74lemzBlI35L7jEDwr8fTmEV" },
  { name: "Fortinet", tier: "Security Partner", tierStyle: "text-slate-300 bg-white/10", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbS74B4QFW3dYIR417WQcnibmJf_LLGl1lUBvo-H9INLdp7gmTsF3vHsv8LyK3pPoWDIIbpLKrkpj907OZrR_eYsvoJQ43uQXygNnFjiMsr-yA7GF3CHqOJ64xFnzng1slJ4sY8u4HZDx03LrXQ9CHaMLvDsE2TXkPyW-BLLXfVK8qwov3_aAChlREKe1gMBSlUzm0dxBD7yc-Q4H17BRLTi6fBWx1VjS3V9pku62oNyJ_BFiAKe_XGdalOAJQAzRfTrGfqC8YRV_E" },
];

const directory = {
  "A - G": ["Allied Telesis", "APC by Schneider", "Audio-Technica", "Belden", "Cambium Networks", "CommScope", "D-Link", "Epson", "Extreme Networks", "Grandstream"],
  "H - N": ["Honeywell", "HP Enterprise", "Intercom", "Jabra", "JBL Professional", "Legrand", "LG Electronics", "Logitech", "NEC Corporation", "Netgear Business"],
  "O - U": ["On-Stage", "Pelco", "Plantronics", "QSC Audio", "Ruckus Wireless", "Sennheiser", "Shure", "Sony Professional", "TP-Link", "Ubiquiti"],
  "V - Z": ["Verkada", "ViewSonic", "Vivotek", "Western Digital", "Yamaha Unified", "Zebra Technologies", "Zoom Rooms", "Zyxel"],
};

export default function PartnersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partners" }]} />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src={heroImg} alt="Technology infrastructure" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-[1]"></div>
        <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
          <span className="font-label-caps text-on-tertiary-container mb-4 block">
            GLOBAL INFRASTRUCTURE PARTNERS
          </span>
          <h1 className="font-h1 text-h1 text-white max-w-2xl mb-6">
            Unified Technology <br />
            Lifeline Ecosystem
          </h1>
          <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">
            We engineer mission-critical solutions by integrating world-class
            technology from industry leaders in Telecom, AV, and Security.
          </p>
        </div>
      </section>

      {/* Domain Sections */}
      <div className="pulse-bg">
        {/* Telecom */}
        <section className="max-w-[1280px] mx-auto px-8 py-section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-secondary pl-6">
            <div>
              <span className="font-label-caps text-secondary">DOMAIN 01</span>
              <h2 className="font-h2 text-h2">Telecom & Communication</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
              Enterprise-grade VoIP, unified communications, and cellular signal
              enhancement technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
            {telecomPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* AV */}
        <section className="bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-8 py-section-padding">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-secondary pl-6">
              <div>
                <span className="font-label-caps text-secondary">DOMAIN 02</span>
                <h2 className="font-h2 text-h2">Audio Visual & Integrated Media</h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
                Immersive acoustic experiences and high-fidelity visual systems
                for corporate and retail spaces.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
              {avPartners.map((p) => (
                <PartnerCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="max-w-[1280px] mx-auto px-8 py-section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-secondary pl-6">
            <div>
              <span className="font-label-caps text-secondary">DOMAIN 03</span>
              <h2 className="font-h2 text-h2">Physical Security & Surveillance</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
              AI-driven surveillance, access control, and sophisticated
              monitoring lifelines for business assets.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
            {securityPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Networking */}
        <section className="bg-primary-container text-white">
          <div className="max-w-[1280px] mx-auto px-8 py-section-padding">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-tertiary-fixed-dim pl-6">
              <div>
                <span className="font-label-caps text-tertiary-fixed-dim">
                  DOMAIN 04
                </span>
                <h2 className="font-h2 text-h2 text-white">
                  Networking & Connectivity
                </h2>
              </div>
              <p className="font-body-md text-slate-400 max-w-md mt-4 md:mt-0">
                The backbone of business operations. Robust routing, switching,
                and wireless mesh networks.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
              {networkPartners.map((p) => (
                <PartnerCard key={p.name} {...p} dark />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Directory */}
      <section className="max-w-[1280px] mx-auto px-8 py-section-padding">
        <h3 className="font-h3 text-h3 mb-12 border-b border-outline-variant pb-6">
          Comprehensive Partner Directory
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {Object.entries(directory).map(([range, items]) => (
            <div key={range}>
              <h4 className="font-h1 text-[32px] text-secondary mb-6">{range}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body-md group cursor-pointer hover:text-secondary transition-colors"
                  >
                    <span className="w-1 h-1 bg-outline rounded-full group-hover:bg-secondary"></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-8 pb-section-padding">
        <div className="bg-secondary-container p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
            <Image src={ctaImg} alt="Collaboration" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-h2 text-h2 mb-6">
              Need a custom integration plan?
            </h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-90">
              Our engineering team works directly with these brands to design
              lifelines that scale with your business growth. Let&apos;s discuss
              your infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-secondary px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors text-center"
              >
                Contact Engineering
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors text-center"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
