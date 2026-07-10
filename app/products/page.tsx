"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ─── types ────────────────────────────────────────────────────────────────────

type BrandProduct = {
  name: string;
  category: string;
  description: string;
  icon: string;
  img: string;
};

type BrandKey = "Matrix" | "Dahua" | "Legrand";

// ─── brand data ───────────────────────────────────────────────────────────────

const brandData: Record<BrandKey, { color: string; categories: string[]; products: BrandProduct[] }> = {
  Matrix: {
    color: "bg-blue-700",
    categories: [
      "All",
      "Network Cameras",
      "NVR / Enterprise NVR",
      "Video Management (VMS)",
      "Access Control",
      "Time Attendance",
      "Hybrid IP-PBX",
      "IP Phones & Endpoints",
      "VoIP Gateways",
    ],
    products: [
      {
        name: "SATATYA CIBR — Project Bullet Network Camera",
        category: "Network Cameras",
        description: "2MP/5MP/8MP outdoor bullet IP camera with Sony STARVIS sensor, up to 50 m IR and H.265 compression.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/project-bullet-network-cameras.webp",
      },
      {
        name: "SATATYA MIBR — Mini Bullet Network Camera",
        category: "Network Cameras",
        description: "Compact outdoor bullet IP camera with fixed lens and up to 30 m IR for small-to-medium installations.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Mini-Bullet-Img-4.webp",
      },
      {
        name: "SATATYA CIDR — Project Dome Network Camera",
        category: "Network Cameras",
        description: "Vandal-resistant dome IP camera in 2MP/5MP/8MP with fixed/varifocal/motorised lens options.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Dome_Cam_01.webp",
      },
      {
        name: "SATATYA MIDR — Mini Dome Network Camera",
        category: "Network Cameras",
        description: "Compact dome IP camera for indoor small-to-medium enterprise use.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Dome_Cam_02.webp",
      },
      {
        name: "SATATYA PTZ2040P — 2MP PTZ IR Camera",
        category: "Network Cameras",
        description: "2MP PTZ camera with 38× optical zoom and 300 m IR range for wide-area surveillance.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/2MP-33x-_03-1.webp",
      },
      {
        name: "SATATYA PTZ5040P — 5MP PTZ IR Camera",
        category: "Network Cameras",
        description: "5MP PTZ with 38× optical zoom and 300 m IR for large-area monitoring.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/2MP-33x-_03-1.webp",
      },
      {
        name: "SATATYA MITR — Turret Network Camera",
        category: "Network Cameras",
        description: "Turret-style camera with separate lens and IR LED chamber for vivid day/night imaging.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/Turret-Img-1.webp",
      },
      {
        name: "SATATYA RIDR — Ruggedised Network Camera",
        category: "Network Cameras",
        description: "Shockproof/vibration-resistant cameras certified STQC, EN50155, NEMA 4X for mobile environments.",
        icon: "videocam",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Ruggedised-Camera-Img-3.webp",
      },
      {
        name: "SATATYA NVR0801X–NVR6404X",
        category: "NVR / Enterprise NVR",
        description: "Embedded NVRs supporting 8–64 IP channels, RAID, 4K decoding, up to 10 TB per unit.",
        icon: "hard_drive",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/New-One_Updated-1.webp",
      },
      {
        name: "SATATYA VMSP2020XCTP — 2U Server NVR",
        category: "NVR / Enterprise NVR",
        description: "Server-grade NVR with 144 TB capacity, RAID 0/1/5/6/10 support and built-in VMS.",
        icon: "hard_drive",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2024/04/VMSP-1.webp",
      },
      {
        name: "SATATYA VMSP3020XCTP — 3U Server NVR",
        category: "NVR / Enterprise NVR",
        description: "Server-grade NVR with 288 TB capacity for large enterprise deployments.",
        icon: "hard_drive",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2024/04/VMSP-1.webp",
      },
      {
        name: "SATATYA VMSP4020XCTP — 4U Server NVR",
        category: "NVR / Enterprise NVR",
        description: "Server-grade NVR with 432 TB capacity, highest tier in the VMSP line.",
        icon: "hard_drive",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2024/04/VMSP-1.webp",
      },
      {
        name: "SATATYA SAMAS PLT — Enterprise VMS",
        category: "Video Management (VMS)",
        description: "Supports up to 65,535 cameras with live view, playback, and IVA events across multiple sites.",
        icon: "computer",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/video-management-system.webp",
      },
      {
        name: "SAMAS ANPR License",
        category: "Video Management (VMS)",
        description: "Automatic Number Plate Recognition analytics for 1/3/10 camera configurations.",
        icon: "computer",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/video-management-system.webp",
      },
      {
        name: "SAMAS EIVA License — Enterprise IVA",
        category: "Video Management (VMS)",
        description: "Enterprise Intelligent Video Analytics license for advanced behavioural analysis.",
        icon: "computer",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/video-management-system.webp",
      },
      {
        name: "SAMAS VTPM — Vehicle Tracking & Parking",
        category: "Video Management (VMS)",
        description: "Vehicle tracking and parking management analytics for 10/50/200 slots.",
        icon: "computer",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/video-management-system.webp",
      },
      {
        name: "COSEC ARC DC200P — Two-Door IP Controller",
        category: "Access Control",
        description: "Face, fingerprint, card, PIN and BLE; 50,000 users, PoE/PoE+ powered door controller.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/New-COSEC-ARGO-FACE.png",
      },
      {
        name: "COSEC ARGO FACE — Face Recognition Controller",
        category: "Access Control",
        description: "Face recognition door controller with RFID options and full Gorilla Glass touchscreen.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/COSEC-ARGO-FACE.webp",
      },
      {
        name: "COSEC VEGA FOT/FAE/FAM Series",
        category: "Access Control",
        description: "Multi-credential controller (fingerprint, RFID, BLE, Wi-Fi, 4G/LTE), IP65 rated.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/COSEC-VEGA-FOT.webp",
      },
      {
        name: "COSEC PANEL200P — Access Control Hub",
        category: "Access Control",
        description: "Scalable panel supporting 255 devices and 25,000 users in standalone or networked mode.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/COSEC-PANEL200P.webp",
      },
      {
        name: "COSEC CENTRA — On-Premise Management",
        category: "Access Control",
        description: "Web-based platform for 10–10,000 users covering ACM, VMM, Time-Attendance and FR.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/COSEC-CENTRA-New-img.png",
      },
      {
        name: "COSEC VYOM — Cloud Access Platform",
        category: "Access Control",
        description: "Cloud-based access management with visitor management, cafeteria and FR modules.",
        icon: "lock",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/COSEC-ARGO-FACE.png",
      },
      {
        name: "COSEC ARGO FACE — Attendance Terminal",
        category: "Time Attendance",
        description: "Touchless face recognition terminal for contactless attendance marking in offices.",
        icon: "schedule",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/COSEC-ARGO-FACE.webp",
      },
      {
        name: "COSEC SAMAY — T&A Software (SOHO)",
        category: "Time Attendance",
        description: "Time-attendance solution for small offices; manages shifts, leave and reports.",
        icon: "schedule",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/Cosec-samay-img.png",
      },
      {
        name: "COSEC APTA — Mobile Attendance App",
        category: "Time Attendance",
        description: "Mobile app for on-the-go attendance, leave and task management with real-time sync.",
        icon: "schedule",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/COSEC-APTA-1.webp",
      },
      {
        name: "ETERNITY NENX — Small Hybrid IP-PBX",
        category: "Hybrid IP-PBX",
        description: "Small modular hybrid IP-PBX up to 50 IP subscribers; expandable with SLT/DKP/CO/GSM cards.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/ETERNITY-NENXIP50-8.webp",
      },
      {
        name: "ETERNITY PENX6SAC — SMB IP-PBX",
        category: "Hybrid IP-PBX",
        description: "48 analog + 16 digital + 100 IP + 16 CO ports with 50 SIP trunks for small business.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/ETERNITY-PENX-Hybrid-IP-PBX.webp",
      },
      {
        name: "ETERNITY GENX — SME IP-PBX",
        category: "Hybrid IP-PBX",
        description: "Up to 240 analog, 96 digital, 999 IP subscribers; 64 CO ports and 99 SIP trunks.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/ETERNITY-GENX.webp",
      },
      {
        name: "ETERNITY MENX — Enterprise IP-PBX",
        category: "Hybrid IP-PBX",
        description: "Up to 512 analog, 128 digital, 2000 IP subscribers with 128 CO ports.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/MENX-AC__03.webp",
      },
      {
        name: "PRASAR UCS SPARK200 — Embedded IP-PBX Server",
        category: "Hybrid IP-PBX",
        description: "2100 IP users, 99 SIP trunks, 248 VoIP channels; embedded unified communications server.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/PRASAR-UCS-SPARK200.webp",
      },
      {
        name: "ANANT UCS — Software IP-PBX",
        category: "Hybrid IP-PBX",
        description: "Software-based IP-PBX for 10–500 users with conference, voicemail and contact-centre modules.",
        icon: "phone_in_talk",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2022/09/Our-Solutions_ANANT.jpg",
      },
      {
        name: "SPARSH VP210 — Entry IP Deskphone",
        category: "IP Phones & Endpoints",
        description: "Entry-level SIP/proprietary IP phone with 128×64 LCD display.",
        icon: "phone",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/50-Next-gen-Call-Amenities-1.webp",
      },
      {
        name: "SPARSH VP510E — Premium IP Deskphone",
        category: "IP Phones & Endpoints",
        description: "Premium business IP phone with 240×64 backlit graphical LCD and full duplex speakerphone.",
        icon: "phone",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Next-gen-Call-Amenities-1.webp",
      },
      {
        name: "EON510 — Digital Keyphone",
        category: "IP Phones & Endpoints",
        description: "Premium digital keyphone with 240×64 graphical LCD; optional DSS console support.",
        icon: "phone",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Redefined-Call-Management-and-Mobility-3.webp",
      },
      {
        name: "VARTA Softphone",
        category: "IP Phones & Endpoints",
        description: "Software-based phone client for PC and mobile devices.",
        icon: "phone",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/USP03_01.webp",
      },
      {
        name: "SETU VFX Series — VoIP Gateways",
        category: "VoIP Gateways",
        description: "VoIP to FXO/FXS gateways with 4–32 VoIP channels for PSTN connectivity.",
        icon: "router",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/SETU-VFX-_404_side.webp",
      },
      {
        name: "SETU VTEP Series — PRI Gateways",
        category: "VoIP Gateways",
        description: "VoIP to T1/E1/PRI gateways with 1–4 PRI ports; up to 125 SIP trunks.",
        icon: "router",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/Setu-Vtep-_1P_02.webp",
      },
      {
        name: "SIMADO GFX Series — GSM Gateways",
        category: "VoIP Gateways",
        description: "GSM to FXS/FCT gateways for cellular fallback and SIM-based calling.",
        icon: "router",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/09/SIMADO-GFX11E_03.webp",
      },
      {
        name: "SARVAM UCS — Unified Media Gateway",
        category: "VoIP Gateways",
        description: "Unified communication server and media gateway for enterprise convergence.",
        icon: "router",
        img: "https://www.matrixcomsec.com/wp-content/uploads/2023/07/Thumbnail-_01.webp",
      },
    ],
  },

  Dahua: {
    color: "bg-red-700",
    categories: [
      "All",
      "HDCVI Cameras",
      "PTZ Cameras",
      "Network Video Recorders",
      "HDCVI / DVR Recorders",
      "Video Intercoms",
      "Access Control & T&A",
      "Alarms",
      "Fire Detection",
      "Transmission & Switches",
      "Display & Control",
    ],
    products: [
      {
        name: "HDCVI Pro Series Cameras",
        category: "HDCVI Cameras",
        description: "High-performance cameras for advanced analog-upgrade projects with superior image quality.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "HDCVI Lite Series Cameras",
        category: "HDCVI Cameras",
        description: "Mid-range HDCVI cameras balancing cost and performance for standard installations.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "HDCVI Cooper Series Cameras",
        category: "HDCVI Cameras",
        description: "Value-focused HDCVI cameras for essential surveillance needs at competitive cost.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "HDCVI Active Deterrence Series",
        category: "HDCVI Cameras",
        description: "Built-in PIR and active deterrence (lights/siren) for proactive security over coax.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "HDCVI Panorama Series",
        category: "HDCVI Cameras",
        description: "Multi-sensor fisheye cameras for 360° coverage over existing coaxial cable.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "HDCVI PoC Series Cameras",
        category: "HDCVI Cameras",
        description: "Power over Coax cameras delivering power and video over a single coaxial cable.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251014/HDCVI_Cameras_1.png",
      },
      {
        name: "X-Spans PTZ Series",
        category: "PTZ Cameras",
        description: "Flagship next-generation PTZ line with the highest performance and advanced AI technology.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads_formal/image/20260311/PTZ_Cameras.png",
      },
      {
        name: "WizMind PTZ Series",
        category: "PTZ Cameras",
        description: "Premium AI-powered PTZ cameras for intelligent surveillance applications.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads_formal/image/20260311/PTZ_Cameras.png",
      },
      {
        name: "WizSense PTZ Series",
        category: "PTZ Cameras",
        description: "AI-enabled PTZ cameras with smart human/vehicle detection and perimeter analytics.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads_formal/image/20260311/PTZ_Cameras.png",
      },
      {
        name: "Wireless PTZ Series",
        category: "PTZ Cameras",
        description: "Cable-free PTZ cameras with wireless connectivity for flexible outdoor deployment.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads_formal/image/20260311/PTZ_Cameras.png",
      },
      {
        name: "HDCVI PTZ Cameras",
        category: "PTZ Cameras",
        description: "PTZ cameras over HDCVI technology for retrofitting existing coaxial infrastructure.",
        icon: "videocam",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/hdcvi-ptz.png",
      },
      {
        name: "WizMind NVR Series",
        category: "Network Video Recorders",
        description: "AI-embedded NVRs for intelligent event detection, perimeter protection and face recognition.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "WizSense NVR Series",
        category: "Network Video Recorders",
        description: "Smart NVRs with human/vehicle false-alarm filtering and efficient storage compression.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "Ultra NVR Series",
        category: "Network Video Recorders",
        description: "Premium-performance NVRs offering maximum specs for demanding deployments.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "Pro NVR Series",
        category: "Network Video Recorders",
        description: "Mid-to-large project NVRs balancing performance and budget for commercial sites.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "Lite NVR Series",
        category: "Network Video Recorders",
        description: "Cost-optimised Dahua quality NVRs from 4-channel to 32-channel configurations.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "SSD NVR",
        category: "Network Video Recorders",
        description: "Solid-state NVRs for enhanced speed, silent operation and long-term reliability.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Web_1920_cctv_products_img_3.png",
      },
      {
        name: "4K HDCVI DVR Series",
        category: "HDCVI / DVR Recorders",
        description: "4K-capable DVRs for high-resolution coaxial camera systems on existing infrastructure.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/HDCVI-records.png",
      },
      {
        name: "S-XVR Multi-Format DVR",
        category: "HDCVI / DVR Recorders",
        description: "Supports HDCVI, HDTVI, AHD, CVBS and IP cameras in a single hybrid recorder.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/HDCVI-records.png",
      },
      {
        name: "Cooper-I / PoC DVR Series",
        category: "HDCVI / DVR Recorders",
        description: "DVRs with Power over Coax support for simplified single-cable installations.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/HDCVI-records.png",
      },
      {
        name: "1080p / 5MP DVR Series",
        category: "HDCVI / DVR Recorders",
        description: "Mid-range DVRs supporting 5MP and 1080p HDCVI cameras for general projects.",
        icon: "hard_drive",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/HDCVI-records.png",
      },
      {
        name: "IP Video Intercom Series",
        category: "Video Intercoms",
        description: "Full IP door station and indoor monitor systems with SIP protocol compatibility.",
        icon: "door_front",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250918/IP.png",
      },
      {
        name: "2-Wire IP Intercom Series",
        category: "Video Intercoms",
        description: "Simplified two-wire IP intercom for easy retrofitting without new cabling.",
        icon: "door_front",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250918/2-wire.png",
      },
      {
        name: "2-Wire Hybrid Intercom Series",
        category: "Video Intercoms",
        description: "Hybrid system combining analog and IP over existing two-wire cabling.",
        icon: "door_front",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250918/2-Wire-Hybrid_1.png",
      },
      {
        name: "Emergency Phone Terminals",
        category: "Video Intercoms",
        description: "Combined CCTV surveillance, display, and emergency call handling terminal.",
        icon: "door_front",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250918/Emergency-Phone-Terminals.png",
      },
      {
        name: "AI Access Control Terminals",
        category: "Access Control & T&A",
        description: "Face recognition terminals with sub-0.3 s recognition, 99.5% accuracy and anti-spoofing.",
        icon: "lock",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20210129/3801.png",
      },
      {
        name: "Standard Access Control Terminals",
        category: "Access Control & T&A",
        description: "Card/PIN-based access control terminals and controllers for standard commercial use.",
        icon: "lock",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20240826/con3801.png",
      },
      {
        name: "Time Attendance Terminals",
        category: "Access Control & T&A",
        description: "Biometric and card-based time-attendance recording devices for workforce management.",
        icon: "schedule",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250918/Time-Attendance.png",
      },
      {
        name: "Turnstiles",
        category: "Access Control & T&A",
        description: "Mechanical turnstile barriers integrating with access control for pedestrian management.",
        icon: "lock",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20200805/Turnstiles2.png",
      },
      {
        name: "Wireless Alarm System",
        category: "Alarms",
        description: "RF-based wireless alarm with remote arming/disarming and smart home integration.",
        icon: "notifications_active",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/wireless2.png",
      },
      {
        name: "Wired Alarm System",
        category: "Alarms",
        description: "Hardwired alarm system for stable, reliable residential and commercial security.",
        icon: "notifications_active",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20250519/Wired-Alarm.png",
      },
      {
        name: "Emergency Alarm / Phone Tower",
        category: "Alarms",
        description: "Emergency communication and alert system for critical safety scenarios.",
        icon: "notifications_active",
        img: "https://material.dahuasecurity.com/uploads/image/20220922/Emergency-Phone-Tower.png",
      },
      {
        name: "Smoke & Heat Alarms",
        category: "Fire Detection",
        description: "Photoelectric/ionization smoke and rate-of-rise heat detection devices.",
        icon: "local_fire_department",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251016/16573075393716.png",
      },
      {
        name: "Smoke Sensing Camera",
        category: "Fire Detection",
        description: "Camera-based early smoke detection using AI for open-area fire prevention.",
        icon: "local_fire_department",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20251016/Flame-Detection-Camera.png",
      },
      {
        name: "Aspirating Smoke Detector (ASD)",
        category: "Fire Detection",
        description: "Air-sampling early detection system for sensitive server rooms and archives.",
        icon: "local_fire_department",
        img: "https://material.dahuasecurity.com/uploads/image/20230529/HY-ASD420B1.png",
      },
      {
        name: "Addressable Fire Alarm System",
        category: "Fire Detection",
        description: "Networked fire alarm with individual device addressing for large building installations.",
        icon: "local_fire_department",
        img: "https://material.dahuasecurity.com/uploads/image/20230529/1555190917244.png",
      },
      {
        name: "PoE Switches",
        category: "Transmission & Switches",
        description: "Power over Ethernet switches purpose-designed for IP surveillance networks.",
        icon: "lan",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/Switches.png",
      },
      {
        name: "ePoE Switches",
        category: "Transmission & Switches",
        description: "Extended PoE enabling transmission up to 800 m at 10 Mbps over Cat5 or coax.",
        icon: "lan",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/Switches.png",
      },
      {
        name: "Cloud Managed Switches",
        category: "Transmission & Switches",
        description: "PoE switches with cloud-based remote management for distributed sites.",
        icon: "lan",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/Cloud-Management-Solution.png",
      },
      {
        name: "Core / Aggregation Switches",
        category: "Transmission & Switches",
        description: "High-capacity backbone and aggregation switches for large surveillance networks.",
        icon: "lan",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/Switches.png",
      },
      {
        name: "Surveillance Monitors",
        category: "Display & Control",
        description: "Dedicated monitors optimised for 24/7 security monitoring with wide viewing angles.",
        icon: "desktop_windows",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/Monitors.png",
      },
      {
        name: "LCD Video Wall Systems",
        category: "Display & Control",
        description: "Multi-panel LCD video wall systems for command and control rooms.",
        icon: "desktop_windows",
        img: "https://materialfile.dahuasecurity.com/uploads/image/20250918/LCD-Video-Walls.png",
      },
      {
        name: "DSS — Digital Surveillance Software",
        category: "Display & Control",
        description: "Professional video management and surveillance platform for large deployments.",
        icon: "desktop_windows",
        img: "https://materialfile.dahuasecurity.com/new_uploads/image/20260305/Software.png",
      },
    ],
  },

  Legrand: {
    color: "bg-orange-600",
    categories: [
      "All",
      "Living Now Switches",
      "Arteor Switches",
      "Myrius Switches",
      "Lyncus & Mylinc Switches",
      "Circuit Breakers & MCBs",
      "Distribution Boards",
      "Cable Management",
      "Digital Building & Cabling",
      "IoT & Smart Switches",
      "Door Entry Systems",
      "Home Automation (KNX)",
    ],
    products: [
      {
        name: "Living Now 1-Way Switch 10AX/16AX/20AX",
        category: "Living Now Switches",
        description: "Ultra-flat single-pole switches in White, Black and Sand finishes; Italian luxury design.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_BT-K4001-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Living Now 2-Way Switch 10AX",
        category: "Living Now Switches",
        description: "Two-way switching for staircase/corridor use in multiple premium finishes.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_BT-K4003-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Living Now 1P Push Button (10A)",
        category: "Living Now Switches",
        description: "Normally-open momentary push button compatible with Home+Control smart system.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_BT-K4005-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Living Now Cover Plates (1M)",
        category: "Living Now Switches",
        description: "Single-module aesthetic cover plates in White, Black and Sand for the Living Now range.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_BT-KW01-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Arteor Advance IoT Smart Switches",
        category: "Arteor Switches",
        description: "Top-tier modular switches with smart home integration (IoT-ready) and premium aesthetics.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-573400-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Arteor 6AX / 10A 1-Way Switch",
        category: "Arteor Switches",
        description: "Single-pole 6A/10A switch with modular flexibility in round and square rocker options.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-573400-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Arteor 6AX 2-Way Switch with Indicator",
        category: "Arteor Switches",
        description: "Two-way switch with indicator in square white finish for staircases and corridors.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-573403-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Arteor 20A 1-Way Switch",
        category: "Arteor Switches",
        description: "20A heavy-duty switch with/without indicator for AC and high-load circuits.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_573410-LEGRAND.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Myrius 6A / 10A Switches (Premium-Mid)",
        category: "Myrius Switches",
        description: "1-way and 2-way modular switches with vibrant IMD decorative plate in multiple finishes.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-679200-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Myrius 16A Fan Regulator Switch",
        category: "Myrius Switches",
        description: "6A/10A switch with fan speed regulator capability for ceiling and exhaust fans.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-679204-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Myrius IoT Smart Switch",
        category: "Myrius Switches",
        description: "Wi-Fi/app-controlled smart switch from the Myrius range for home automation.",
        icon: "toggle_on",
        img: "https://cdn.legrand.co.in/legrand/public/product3.jpg",
      },
      {
        name: "Lyncus 6A / 10A Switches",
        category: "Lyncus & Mylinc Switches",
        description: "Signature notch-design switch with smooth, sound-dampened operation and minimalist aesthetics.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-677200-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Mylinc 6A / 10A / 16A / 25A Switches",
        category: "Lyncus & Mylinc Switches",
        description: "Compact ISI-certified switches tested for 1 lakh operations; 6A to 25A variants.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-675501-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Mylinc 32A DP Switch",
        category: "Lyncus & Mylinc Switches",
        description: "32A double-pole switch with indicator for industrial and high-load circuits.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-675526-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Allzy 6A–20A Switches (Value Range)",
        category: "Lyncus & Mylinc Switches",
        description: "CRS-certified value-range switches in 1-way, 2-way and indicator variants; 5 finishes.",
        icon: "toggle_on",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-681100-WEB-F.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "DX3 MCB — Miniature Circuit Breakers",
        category: "Circuit Breakers & MCBs",
        description: "Residential and commercial MCBs for overload and short-circuit protection.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408587-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "DX3 RCCB — Residual Current Circuit Breaker",
        category: "Circuit Breakers & MCBs",
        description: "Residual current devices for earth fault and electrocution protection.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408580-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "DPX3 MCCB — Moulded Case Circuit Breakers",
        category: "Circuit Breakers & MCBs",
        description: "Industrial MCCBs for higher current ratings in commercial and industrial panels.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408595-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "DMX3 ACB — Air Circuit Breakers",
        category: "Circuit Breakers & MCBs",
        description: "High-capacity air circuit breakers for large industrial and infrastructure applications.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408598-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "SPD — Surge Protection Devices",
        category: "Circuit Breakers & MCBs",
        description: "Lightning and transient surge protection for panels and sensitive equipment.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408592-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Contactors & Thermal Overload Relays",
        category: "Circuit Breakers & MCBs",
        description: "Electromechanical switching and overcurrent protection for motor and industrial loads.",
        icon: "electric_bolt",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-408590-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "DIZLY SPN Distribution Boards (6W–16W)",
        category: "Distribution Boards",
        description: "Single-phase neutral distribution boards with modern aesthetics for visible installation.",
        icon: "dashboard",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-402360-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Ekinox3 Commercial Distribution Boards",
        category: "Distribution Boards",
        description: "Heavy-duty distribution boards for commercial and industrial power distribution.",
        icon: "dashboard",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-402363-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Plexo IP-Rated Distribution Boards",
        category: "Distribution Boards",
        description: "Weatherproof enclosures for outdoor and harsh-environment electrical installations.",
        icon: "dashboard",
        img: "https://assets.legrand.com/pim/THUMBNAIL/th_LG-402365-WEB-R.jpg?optimize=low&bg-color=255,255,255",
      },
      {
        name: "Desk & Floor Cable Management",
        category: "Cable Management",
        description: "Desk-mounted cable routing, pop-up sockets and floor-box systems for office workstations.",
        icon: "cable",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Furniture-Pop-up-box.jpg",
      },
      {
        name: "Perimeter Trunking System",
        category: "Cable Management",
        description: "Skirting-level cable trunking and perimeter ducts for wall-run cable management.",
        icon: "cable",
        img: "https://cdn.legrand.co.in/legrand/public/perimeter-1.png",
      },
      {
        name: "Overhead Cable Trays",
        category: "Cable Management",
        description: "Suspended cable trays and overhead trunking for commercial open-plan spaces.",
        icon: "cable",
        img: "https://cdn.legrand.co.in/legrand/public/overhead-1.jpg",
      },
      {
        name: "LINKEO Structured Cabling (Cat5e/Cat6/Cat6A)",
        category: "Digital Building & Cabling",
        description: "Copper and fibre cabling solutions for enterprise LAN infrastructure.",
        icon: "lan",
        img: "https://cdn.legrand.co.in/legrand/public/linkeo-patch-panel.jpg",
      },
      {
        name: "Valrack Wall-Mount & Floor-Standing Cabinets",
        category: "Digital Building & Cabling",
        description: "Wall-mounted and free-standing 19\" network enclosures for SMB to data-centre use.",
        icon: "dns",
        img: "https://cdn.legrand.co.in/legrand/public/Artboard+7.png",
      },
      {
        name: "PDU — Power Distribution Units",
        category: "Digital Building & Cabling",
        description: "Rack-mounted power distribution units for data centre and server room power management.",
        icon: "dns",
        img: "https://cdn.legrand.co.in/legrand/public/Artboard+4.png",
      },
      {
        name: "PMX Energy Meters",
        category: "Digital Building & Cabling",
        description: "Multifunction energy meters for monitoring consumption and power quality in buildings.",
        icon: "dns",
        img: "https://cdn.legrand.co.in/legrand/public/Artboard+5.png",
      },
      {
        name: "Living Now IoT Smart Switches",
        category: "IoT & Smart Switches",
        description: "Wi-Fi/app-controlled smart switches and sockets from the premium Living Now range.",
        icon: "wifi",
        img: "https://cdn.legrand.co.in/legrand/public/living_now_thumbnail.jpg",
      },
      {
        name: "Arteor / Arteor Advance IoT",
        category: "IoT & Smart Switches",
        description: "Connected smart switches with app and voice control from the Arteor upscale range.",
        icon: "wifi",
        img: "https://cdn.legrand.co.in/legrand/public/Arteor-product.jpg",
      },
      {
        name: "Myrius IoT Smart Switches",
        category: "IoT & Smart Switches",
        description: "Connected smart switches from the Myrius range for affordable home automation.",
        icon: "wifi",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Myrius+Sleep_Wake-up+Wireless+Scenario+Switch.jpg",
      },
      {
        name: "Classe 300 EOS Video Door Phone",
        category: "Door Entry Systems",
        description: "Smart video door phone with integrated monitor, app connectivity and IP camera.",
        icon: "door_front",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Classe-300-EOS-with-MyHOME.jpg",
      },
      {
        name: "Multi-Apartment Door Entry System",
        category: "Door Entry Systems",
        description: "Centralised video intercom system for residential apartment buildings.",
        icon: "door_front",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Classe-300-EOS-with-MyHOME.jpg",
      },
      {
        name: "Standalone Door Entry Kit",
        category: "Door Entry Systems",
        description: "Single-door video intercom kit for standalone homes and small offices.",
        icon: "door_front",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Classe-300-EOS-with-MyHOME.jpg",
      },
      {
        name: "KNX Mallia-Senses Touch Panels",
        category: "Home Automation (KNX)",
        description: "KNX-protocol touch-sensitive wall panels for smart building lighting and climate control.",
        icon: "home_iot_device",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Living-Now-KNXKeypad.jpg",
      },
      {
        name: "KNX Living Now Switches",
        category: "Home Automation (KNX)",
        description: "KNX-compatible Living Now switches for integration in KNX building automation systems.",
        icon: "home_iot_device",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Living-Now-KNXKeypad.jpg",
      },
      {
        name: "MyHome Integrated Automation System",
        category: "Home Automation (KNX)",
        description: "Full home automation using Living Now / Arteor Advance switches with bus communication.",
        icon: "home_iot_device",
        img: "https://cdn.legrand.co.in/legrand/public/featureimages/Living-Now-Digital-Controls.jpg",
      },
    ],
  },
};

// ─── constants ────────────────────────────────────────────────────────────────

const BRANDS: BrandKey[] = ["Matrix", "Dahua", "Legrand"];
const PAGE_SIZE = 9;

// ─── component ────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageInner />
    </Suspense>
  );
}

function ProductsPageInner() {
  const searchParams = useSearchParams();
  const [activeBrand, setActiveBrand] = useState<BrandKey>("Matrix");
  const [brandCat, setBrandCat] = useState("All");
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const brand = searchParams.get("brand");
    if (brand && BRANDS.includes(brand as BrandKey)) {
      setActiveBrand(brand as BrandKey);
    }
  }, [searchParams]);

  const switchBrand = (brand: BrandKey) => {
    setActiveBrand(brand);
    setBrandCat("All");
    setPage(1);
    setSearchQuery("");
  };

  const switchCat = (cat: string) => {
    setBrandCat(cat);
    setPage(1);
  };

  const current = brandData[activeBrand];

  // When a search query is active, search across ALL brands
  const filtered = searchQuery.trim()
    ? Object.values(brandData)
        .flatMap((b) => b.products)
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : brandCat === "All"
    ? current.products
    : current.products.filter((p) => p.category === brandCat);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

      {/* Hero */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <span className="font-label-caps text-secondary mb-4 block">
            SOLUTIONS ECOSYSTEM
          </span>
          <h1 className="font-h1 text-h1 text-primary mb-6 max-w-2xl">
            Complete Product Catalog
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Explore our comprehensive range of high-performance connectivity,
            communication, and security infrastructure from our strategic brand
            partners.
          </p>
        </div>
      </section>

      {/* Brand Catalog */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1280px] mx-auto px-8">

          {/* Search bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                id="product-search"
                type="text"
                placeholder="Search products by name, category or description..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-outline-variant bg-white px-5 py-3.5 pr-12 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-400"
              />
              {searchQuery ? (
                <button
                  onClick={() => { setSearchQuery(""); setPage(1); }}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center leading-none material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
                >
                  close
                </button>
              ) : (
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center leading-none material-symbols-outlined text-on-surface-variant pointer-events-none"
                  aria-hidden="true"
                >
                  search
                </span>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs text-on-surface-variant">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""} found across all brands for &quot;{searchQuery}&quot;
              </p>
            )}
          </div>

          {/* Brand tabs */}
          <div className={`flex justify-evenly border-b-2 border-outline-variant mb-10 ${searchQuery ? "opacity-40 pointer-events-none" : ""}`}>
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => switchBrand(brand)}
                className={`relative px-8 py-4 font-label-caps text-sm transition-colors ${activeBrand === brand
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {brand}
                {activeBrand === brand && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-secondary" />
                )}
              </button>
            ))}
          </div>

          {/* Sidebar + grid layout */}
          <div className="flex flex-col md:flex-row gap-10">

            {/* Category sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="md:sticky md:top-28">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant">
                  <h3 className="font-semibold text-sm">Filter by Category</h3>
                  <span className="text-xs text-on-surface-variant">
                    {filtered.length} products
                  </span>
                </div>
                <div className="space-y-1">
                  {current.categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => switchCat(cat)}
                      className={`w-full text-left px-3 py-2 text-sm transition-all ${brandCat === cat
                          ? "font-medium bg-primary text-on-primary border-l-4 border-secondary"
                          : "text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-on-surface-variant">
                  Showing{" "}
                  {filtered.length === 0
                    ? "0"
                    : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)}`}{" "}
                  of {filtered.length} products
                </span>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20 text-on-surface-variant">
                  No products found in this category.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {paginated.map((p) => (
                    <div
                      key={p.name}
                      className="group border border-outline-variant bg-white hover:border-primary transition-all duration-300 flex flex-col"
                    >
                      {/* Product image header */}
                      <div className="h-40 bg-white flex items-center justify-center relative overflow-hidden border-b border-outline-variant">
                        <div className={`absolute top-0 left-0 right-0 h-1 ${current.color}`} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.img}
                          alt={p.name}
                          className="h-full w-full object-contain p-4"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className={`absolute inset-0 hidden items-center justify-center ${current.color}`}
                          aria-hidden="true"
                        >
                          <span className="material-symbols-outlined text-white text-5xl">
                            {p.icon}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-label-caps text-[9px] text-on-surface-variant uppercase leading-tight max-w-[65%]">
                            {p.category}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-[9px] font-bold text-white uppercase ${current.color}`}
                          >
                            {activeBrand}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                          {p.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4 flex-1">
                          {p.description}
                        </p>
                        <Link
                          href="/contact"
                          className="w-full py-2.5 border border-primary text-primary font-label-caps text-[10px] group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-1.5"
                        >
                          Enquire Now
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    aria-label="Previous page"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-10 h-10 flex items-center justify-center border transition-all ${page === n
                          ? "border-primary bg-primary text-on-primary"
                          : "border-outline-variant hover:bg-surface-container"
                        }`}
                    >
                      {n}
                    </button>
                  ))}

                  <button
                    aria-label="Next page"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
