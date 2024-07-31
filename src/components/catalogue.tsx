import { Button } from "@nextui-org/button";

const handleClick = () => {
    window.open("files/PortafolioSmartCol2024.pdf");
}

const Catalogue = () => {
    return (
        <div className="flex justify-center w-full my-5">
            <Button onClick={handleClick} size="lg" color="primary" radius="full" variant="ghost" className="hover:text-background">
                <p className="font-semibold p-5 ">
                    Explora  Nuestro Catálogo
                </p>
            </Button>
        </div>
    )
}

export default Catalogue;