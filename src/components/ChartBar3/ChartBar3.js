import styles from './chartbar3.module.scss';

function ChartBar3({ brandName = 'HIEUSTOR', iconName = 'fa-brands fa-facebook-f', color1 = 'blue', total = 0, unitName = 'like' }) {
    return (
        <>
            <div style={{ background: color1 }} className={styles.container} >
                <div className={styles.container2}>
                    <div style={{ marginBottom: "62%" }}>
                        <i class={iconName} style={{ color: '#d4d4d4' }}></i>
                    </div>
                    <div>

                        <span>
                            <h4 style={{ marginBottom: "0%", color: "white" }}>{brandName}</h4>
                            <a style={{ color: "white" }}>{total} </a>
                            <a style={{ color: "white" }}>{unitName}</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartBar3;