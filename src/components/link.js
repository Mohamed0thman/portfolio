/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function NavLink({ path, label, isSticky, children, ...rest }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
  };
  return (
    <NextLink href={path}>
      <MenuLink
        style={style}
        className={`${router.asPath === path ? "active" : ""} ${
          isSticky ? "unSticky" : ""
        }`}
        {...rest}
      >
        {children ? children : label}
      </MenuLink>
    </NextLink>
  );
}
export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children ? children : label}
    </A>
  );
}
