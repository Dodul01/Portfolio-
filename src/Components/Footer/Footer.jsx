const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p className="text-center text-[#CACACA] text-base font-semibold py-5 mt-10">© {year} Mozammel Hoque Dodul</p>
        </footer>
    )
}

export default Footer