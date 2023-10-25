import { useQuery } from "@tanstack/react-query";
import { CATALOGS, IMAGE_PREFIX } from "../../config/constants";
import { getAllCatalogs } from "../../services/catalogService";
import { Carrousel } from "../../components/cards/Carrousel";
import { Grid } from "../../components/grid/Grid";
import { FaShoppingCart } from "react-icons/fa";
import { LayoutSale } from "../../containers/LayoutSale";
import { useSale } from "../../hooks/useSale";
import { FooterForHomePage } from "./FooterForHomePage.jsx";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import NotFound from "../error/NotFound";

const HomePage = () => {
    const { open, setOpen } = useSale();
    const { data, isLoading, error } = useQuery({
        queryFn: () => getAllCatalogs(CATALOGS.testType),
        queryKey: ["catalog", CATALOGS.testType],
    });

    if (error) {
        return <NotFound Message={error.message} Number={error.statusCode} />;
    }

    return (
        <LayoutSale>
            <header className="sticky top-0 z-50 flex w-full flex-row justify-between bg-sky-600 p-4 text-white">
                <article className="flex flex-row items-center">
                    <img
                        src={`${IMAGE_PREFIX}img/logo.jpg`}
                        alt=""
                        className="h-20 w-full rounded-3xl"
                    />
                    <span className="ms-3 text-2xl font-bold">Lab2You</span>
                </article>
                <article className="flex flex-row items-center">
                    <span className="hidden md:flex md:gap-4">
                        <Link to="/login" className="font-bold">
                            Iniciar sesión
                        </Link>
                        <Link to="/register" className="font-bold">
                            Registrarse
                        </Link>
                    </span>
                    <span
                        className="me-4 flex cursor-pointer items-center font-bold"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="ms-4 hidden md:block">Ver Carrito</span>
                        <FaShoppingCart size={23} />
                    </span>
                </article>
            </header>
            <main>
                <section
                    className="relative flex h-[75vh]  w-full flex-col items-center justify-center  bg-[url('/clinica_medica.webp')] bg-cover bg-no-repeat"
                    style={{ backgroundAttachment: "fixed" }}
                >
                    <div className="absolute z-10  h-[75vh] w-full  bg-black opacity-60"></div>
                    <h1 className="relative z-[100] text-center text-4xl font-bold text-white">
                        Bienvenid@ a Lab2You la cura a tus problemas medicos
                    </h1>
                    <div className="z-[100] mt-8 flex w-1/2 flex-wrap justify-around gap-4 md:hidden">
                        <Button>
                            <Link to="/login" className="font-bold">
                                Iniciar sesión
                            </Link>
                        </Button>
                        <Button>
                            <Link to="/register" className="font-bold">
                                Registrarse
                            </Link>
                        </Button>
                    </div>
                </section>
                <section className="py-8">
                    <h2 className="text-center text-3xl font-bold">
                        Nuestros <span className="text-sky-600">Servicios</span>
                    </h2>
                    <article className="flex justify-center">
                        <p className="w-3/4 text-center">
                            Esta clínica ofrece servicios de salud general y especializada,
                            que incluye medicina general y especialidades como ginecología,
                            traumatología, cirugía, pediatría, medicina interna, psicología,
                            medicina estética, además de laboratorios y medicamentos, así
                            como, diagnóstico por imágenes.
                        </p>
                    </article>
                    <div className="mx-4 lg:mx-24">
                        <Grid sm={2} md={3} className="gap-8 py-8">
                            {data?.map((item, idx) => (
                                <div key={idx} className="rounded-2xl shadow-lg">
                                    <img
                                        src={`${IMAGE_PREFIX}examTypes/${item.id}.jpg`}
                                        alt=""
                                        className="h-60 w-full rounded-t-2xl object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="text-2xl font-bold">{item.name}</h4>
                                        <p className="text-justify">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Grid>
                    </div>
                    <div>
                        <h3 className="text-center text-xl font-bold text-sky-600">
                            De Click Sobre el Examen Para Agregarlo al Carrito
                        </h3>
                        {data?.map((item, idx) => (
                            <Carrousel
                                key={idx}
                                name={item.name}
                                exams={item.items}
                                loading={isLoading}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <FooterForHomePage exams={data?.map((x) => x.name) ?? []} />
        </LayoutSale>
    );
};

export default HomePage;