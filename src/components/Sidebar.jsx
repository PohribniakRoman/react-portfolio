export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar__content">
        <h1 className="sidebar__content--header">Contact</h1>
        <h3 className="sidebar__content--subtitle">Phone</h3>
        <p className="sidebar__content--descr">+380 989 215 203</p>
        <h3 className="sidebar__content--subtitle">Email</h3>
        <p className="sidebar__content--descr">roman.pohribniak@gamail.com</p>
        <h3 className="sidebar__content--subtitle">Telegram</h3>
        <p className="sidebar__content--descr"><a href="https://t.me/RomanPohribniak">@RomanPohribniak</a></p>
        <h1 className="sidebar__content--header">Education</h1>
        <p className="sidebar__content--date">####-2022</p>
        <p className="sidebar__content--ed">Сomplete secondary education</p>
      </div>
    </div>
  );
}
