import '@/styles/globals.css';


export const dynamic = 'force-dynamic'

export const metadata = {
    title: "KuepaChat",
}

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className="font-dmsans">
                { children }
            </body>
        </html>
    )
}
