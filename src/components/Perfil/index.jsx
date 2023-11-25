import styles from './Perfil.module.css';

export default ({ nomeUsuario }) => {
    // export default (props) => {
    // const {nomeUsuario, endereco} = props;
    // const Perfil = () => {
    // const usuario = {
    //     nomeUsuario: 'Andrey Carlos',
    //     avatar: ''
    // }
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="avatar" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
    // }
}

// export default Perfil