import styled from "styled-components";
import { useAuth } from "./../util/Auth";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
export default function Nav() {
  const { user, signOut } = useAuth();

  return (
    <NavZone>
      <NavLogo>Dallet</NavLogo>
      <DropdownMenuRoot>
        {user ? (
          <DropdownMenuTrigger>{user.email}</DropdownMenuTrigger>
        ) : (
          <Link href="/signin">sign in</Link>
        )}

        <DropdownMenuContent>
          <DropdownMenu.Label />
          <DropdownMenuItem>
            <a href="/dashboard/">Dashboard</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/settings">settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOut}>sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </NavZone>
  );
}

const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  border: none;
  border-radius: 5px;
  background: none;

  &:hover {
    cursor: pointer;
    background: #d8d8d8;
  }
`;

const DropdownMenuRoot = styled(DropdownMenu.Root)``;

const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: #fffef2;
`;

const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 2px;
  border-radius: 6px;
  width: 100px;
  background-color: blue;
  margin: 0 auto;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  a {
    width: 100%;
    background-color: red;
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavZone = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 30px;
  /* background-color: #f5f5f5; */
  width: 80%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: black;
    border-radius: 5px;
    padding: 2px 5px;
    &:hover {
      background: #d8d8d8;
    }
  }
`;
const NavLogo = styled.div``;

const NavUser = styled.p``;
