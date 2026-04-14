import step1 from "../assets/pc-build/1.jpeg";
import step2 from "../assets/pc-build/2.jpeg";
import step3 from "../assets/pc-build/3.jpeg";
import step4 from "../assets/pc-build/4.jpeg";
import step5 from "../assets/pc-build/5.jpeg";
import step6 from "../assets/pc-build/6.jpeg";
import step7 from "../assets/pc-build/7.jpeg";
import step8 from "../assets/pc-build/8.jpeg";
import step9 from "../assets/pc-build/9.jpeg";
import step10 from "../assets/pc-build/10.jpeg";
import step11 from "../assets/pc-build/11.jpeg";
import step12 from "../assets/pc-build/12.jpeg";
import hero from "../assets/pc-build/13.jpeg";
import buildVideo from "../assets/pc-build/build.MP4";

export const pcBuildStats = [
  { label: "Platform", value: "AM5" },
  { label: "GPU", value: "Radeon RX 9070" },
  { label: "Cooling", value: "360 mm AIO" },
  { label: "Build Log", value: "12 photos + 1 video" },
];

export const pcBuildParts = [
  { label: "CPU", value: "AMD Ryzen 5 9600X" },
  { label: "GPU", value: "Gigabyte Radeon RX 9070 Gaming OC 16G" },
  { label: "Motherboard", value: "ASUS TUF Gaming B650M-E WIFI" },
  { label: "Memory", value: "T-Force 32GB DDR5 kit" },
  { label: "Storage", value: "TeamGroup MP44L 1TB NVMe SSD" },
  { label: "Cooler", value: "Thermalright Aqua Elite 360 V3" },
  { label: "PSU", value: "Super Flower Leadex VII 850W" },
  { label: "Case", value: "Antec C5 ARGB mid-tower" },
];

export const pcBuildHighlights = [
  {
    title: "Compatibility-driven sourcing",
    description:
      "I sourced the build as a complete system, balancing AM5 platform support, graphics performance, cooling clearance, and power headroom before assembly began.",
  },
  {
    title: "Hands-on assembly and bring-up",
    description:
      "The build covered CPU seating, M.2 installation, memory population, radiator placement, PSU routing, GPU installation, and final internal layout validation.",
  },
  {
    title: "Troubleshooting and validation mindset",
    description:
      "Documenting each checkpoint reflects how I like to work on systems: verify fitment early, isolate issues by stage, and confirm the hardware is ready for software and driver testing.",
  },
];

export const pcBuildTimeline = [
  {
    title: "Sourcing and Planning",
    description:
      "Started with a full compatibility pass across CPU, motherboard, cooling, GPU dimensions, storage, and PSU capacity so the build could come together cleanly.",
  },
  {
    title: "Board Prep",
    description:
      "Installed the Ryzen processor, staged the motherboard, populated memory, and mounted NVMe storage before moving into the chassis.",
  },
  {
    title: "Case Assembly",
    description:
      "Worked through fan layout, motherboard placement, cable routing, and power delivery with an eye on airflow and future serviceability.",
  },
  {
    title: "Final Validation",
    description:
      "Finished with the AIO, graphics card, and front-side cleanup, then used the completed system as a practical exercise in build verification and PC architecture understanding.",
  },
  {
    title: "Initial Boot Verification",
    description:
      "Powered the system on, verified POST behavior, confirmed hardware recognition, and used that first successful boot as a checkpoint before firmware or OS setup.",
  },
  {
    title: "BIOS, Windows, and Driver Setup",
    description:
      "Updated the BIOS, installed Windows, and brought the system to a usable baseline with the key drivers in place, including chipset, graphics, audio, networking, and related motherboard support packages.",
  },
];

export const pcBuildGallery = [
  {
    id: 1,
    image: step1,
    title: "Full parts haul",
    caption:
      "The complete build came together from individually sourced parts, with AMD platform choices leading the build.",
  },
  {
    id: 2,
    image: step2,
    title: "GPU sourced separately",
    caption:
      "Picked up the Radeon RX 9070 as the graphics anchor for the system.",
  },
  {
    id: 3,
    image: step3,
    title: "Motherboard staging",
    caption: "Board inspection and prep before installing major components.",
  },
  {
    id: 4,
    image: step4,
    title: "CPU installation",
    caption:
      "Ryzen 5 9600X seated into the socket during the early build phase.",
  },
  {
    id: 5,
    image: step5,
    title: "Memory installation",
    caption:
      "DDR5 memory installed on the motherboard during the board-prep stage.",
  },
  {
    id: 6,
    image: step6,
    title: "NVMe storage installation",
    caption:
      "The TeamGroup MP44L NVMe drive mounted before the board moved into the case.",
  },
  {
    id: 7,
    image: step7,
    title: "Case airflow baseline",
    caption:
      "Initial fan layout inside the Antec C5 before the main hardware went in.",
  },
  {
    id: 8,
    image: step8,
    title: "Rear-side cable planning",
    caption:
      "Back-panel routing used to keep power delivery organized and accessible.",
  },
  {
    id: 9,
    image: step9,
    title: "PSU installation",
    caption:
      "Power supply mounted and the first round of cable routing brought into the main chamber.",
  },
  {
    id: 10,
    image: step10,
    title: "Major components installed",
    caption:
      "Cooler, GPU, and motherboard all in place as the build reached final assembly.",
  },
  {
    id: 11,
    image: step11,
    title: "Cooling and cable cleanup",
    caption:
      "Closer front-side view of the AIO block, tubing path, and component spacing.",
  },
  {
    id: 12,
    image: step12,
    title: "Finished system",
    caption:
      "Final completed build with the Radeon card, 360 mm AIO, and clean black-and-white airflow setup.",
  },
];

export const pcBuildMedia = {
  hero: hero,
  video: buildVideo,
};
