import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/teacher.png",
        label: "Lecturers",
        href: "/list/lecturers",
        visible: ["admin", "lecturer"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "lecturer"],
      },
      {
        icon: "/staff.png",
        label: "Staff",
        href: "/list/staff",
        visible: ["admin", "lecture"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "lecturer"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "lecturer"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/studentRooms.png",
        label: "Rooms",
        href: "/list/rooms",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/booking.png",
        label: "Bookings",
        href: "/list/bookings",
        visible: ["admin","student"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "lecturer", "student"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "lecturer", "student"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "lecturer", "student"],
      },
    ],
  },
];

const Menu =() => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map(x => (
        <div className="flex flex-col gap-2" key={x.title}>
          <span className="hidden lg:blocl text-gray-400 font-light my-4">{x.title}</span>
          {x.items.map(item=>{
            if(item.visible.includes(role)){
              return(
              <Link href={item.href}
                key={item.label} 
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                <Image src={item.icon} alt="" width={20} height={20}/>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu