const HomeLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center bg-root">
            {children}
        </div>
    )
}
 
export default HomeLayout;