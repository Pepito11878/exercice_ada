export const Header = () => {
  return (
    <header>
      {/* logo a rajouter */}
      <nav>
        <ul className="uppercase">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Video">Video</a>
          </li>
          <li>
            <a href="/Channels">Channels</a>
          </li>
          <li>
            <a href="/FreeCoaching">Free Coaching</a>
          </li>
          <li>
            <a href="/AdvancedCoaching">Adanced coaching</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
