
/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function truckDetails() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <FolderSyncIcon className="size-6" />
          <span className="text-lg font-medium">FleetSyncAI</span>
        </Link>
        <div className="flex-1 flex justify-center text-lg font-medium">Warehouse Details</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <nav className="flex items-center justify-center bg-muted py-3 border-b">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="group inline-flex h-16 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:scale-y-105 data-[state=open]:bg-accent/50">
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:scale-y-105 data-[state=open]:bg-accent/50">
                Truck Details
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:scale-y-105 data-[state=open]:bg-accent/50">
                List of Goods
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:scale-y-105 data-[state=open]:bg-accent/50">
                Revenue
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <main className="flex-1 p-8">
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Truck ID</TableHead>
                <TableHead>Assigned Driver</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>TR001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Arrived</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TR002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Departed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TR003</TableCell>
                <TableCell>Michael Johnson</TableCell>
                <TableCell>In Transit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>)
  );
}

function FolderSyncIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
      <path d="M12 10v4h4" />
      <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      <path d="M22 22v-4h-4" />
      <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    </svg>)
  );
}
