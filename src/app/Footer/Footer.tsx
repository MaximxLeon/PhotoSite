
export function Footer() {
    const year = new Date().getFullYear();
    return <footer className="mx-10 flex flex-col md:flex-row items-center justify-between border-t-2 border-white/20 pt-4">
        <h1 className="text-md font-medium md:text-2xl">
            Дарья Шпица
        </h1>
        <div className="text-gray-400 opacity-70">
            {year} Все права защищены 
        </div>
        <div>
            <div className="flex my-4 md:mt-0 flex-col md:flex-row text-gray-400 opacity-70 md:gap-10">
                <a className="text-center">Политика конфидециальности</a>
                <a className="text-center">Договор оферты</a>
            </div>
        </div>
    </footer>
}