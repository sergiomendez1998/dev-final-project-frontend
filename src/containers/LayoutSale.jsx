import { node } from 'prop-types'
import { Drawer } from './Drawer';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { useSale } from '../hooks/useSale';
import { Button, Card } from 'flowbite-react';
import { useAuth } from '../hooks/useAuth';

export const LayoutSale = ({ children }) => {
    const { cart, getTotal, clearCart, removeProduct, open: isOpen, setOpen: setIsOpen } = useSale();
    const { email, name } = useAuth();

    return (
        <section>
            <div >
                {children}
            </div>
            <Drawer
                title={<div>
                    <h1>Pedido para {name ?? "Visitante"}</h1>
                    <h2>Correo: {email ?? "Visitante"}</h2>
                </div>}
                isOpen={isOpen}
                setIsOpen={() => setIsOpen(!isOpen)}
            >
                {cart.length > 0 && (
                    <article className="mb-4 ms-4 flex justify-center">
                        <Link to={'/login'} className="btn btn-primary flex px-4 py-2">
                            <FaRegEdit size={20} className="me-2" /> Realizar Solicitud
                        </Link>
                    </article>
                )}
                <article className="flex justify-between px-4">
                    <p className="text-2xl font-bold">Total: Q {getTotal().toFixed(2)}</p>

                    <Button color="failure" onClick={clearCart}>
                        <FaTrash size={20} className="focus:ring-lime-400" /> Limpiar Carreta
                    </Button>

                </article>
                <section className="m-4">
                    <h2 className="font-bold">Productos Detalle</h2>
                    <div className="flex flex-wrap gap-4">
                        {cart.map((item, idx) => (
                            <Card
                                key={idx}
                                className="relative w-full border-2 py-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                            >
                                <FaTrash
                                    className="absolute right-5 top-3 cursor-pointer text-red-600"
                                    size={15}F
                                    onClick={() => {
                                        removeProduct(item);
                                    }}
                                />
                                <span className="mt-2 flex flex-row justify-between">
                                    <p className="font-bold">{item.name}</p>{" "}
                                    <p>Q {item.price?.toFixed(2)}</p>
                                </span>
                            </Card>
                        ))}
                    </div>
                </section>
            </Drawer>
        </section>
    )
}

LayoutSale.propTypes = {
    children: node.isRequired
}

