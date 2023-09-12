function Cabes({ title }) {
    return <h1>{title ? title : " default title "}</h1>;
}

export const Sobre = () => {
    return(
        <div className="font-bold ml-3 mt-2">
            <Cabes title="bem-vindo" />
        </div>
    );
};