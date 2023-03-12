import NavbarItem from '../NavbarItem';

export default function getNavbarStartRegularUser(path: string) {
  return (
    <>
      <NavbarItem href="/upload" path={path}>
        📦 Upload
      </NavbarItem>
      <NavbarItem href="/uploads" path={path}>
        🗂 My Uploads
      </NavbarItem>
      <NavbarItem href="/favorites" path={path}>
        ⭐️Favorites
      </NavbarItem>
    </>
  );
}
