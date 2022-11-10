import NavbarItem from '../NavbarItem';

export default function getNavbarStartRegularUser(path: string) {
  /**
   * Coming soon
   * /learn
   * /import
   */
  return (
    <>
      <NavbarItem href="/upload" path={path}>
        📦 Upload
      </NavbarItem>
      <NavbarItem href="/uploads/mine" path={path}>
        🗂 My Uploads
      </NavbarItem>
      <NavbarItem href="https:://templates.2anki.net" path={path}>
        👩🏼‍🎨 Templates
      </NavbarItem>
    </>
  );
}
