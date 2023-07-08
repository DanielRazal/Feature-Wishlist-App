import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
            <div className="flex items-center space-x-2.5 text-sm ml-auto">
                <Link href="/addNewItem">
                    <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                        הוספת פריט חדש
                    </button>
                </Link>
                <Link href="/">
                    <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                        דף הבית
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;