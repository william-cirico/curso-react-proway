import { notification, Pagination } from "antd";
import styles from "CatsPage.module.css";
import { useEffect, useState } from "react";
import { catsApi } from "../../services/api";
import { ICat } from "../../types/Cat";

export default function CatsPage() {
    const [cats, setCats] = useState<ICat[]>([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    });

    async function getCatsFromPage(page: number, limit: number) {
        try {
            const cats = (await catsApi.get<ICat[]>(`/search?limit=${limit}&page=${page}`)).data;
            setCats(cats);
        } catch (error) {
            notification["error"]({ message: "Erro!", description: "Não foi possível obter os gatos."});
        }
    }

    useEffect(() => {
        if (pagination) {
            getCatsFromPage(pagination.page, pagination.limit);
        }        
    }, [pagination]);

    function onChangePagination(page: number, limit: number) {
        setPagination({ page, limit });
    }

    return (
        <div>
            <h2>Consumindo APIs</h2>
            {
                cats.map(cat => (
                    <div key={cat.id}>
                        <img src={cat.url} />
                    </div>
                ))
            }
            <Pagination defaultCurrent={pagination.page} total={100} pageSize={pagination.limit} onChange={onChangePagination} />
        </div>
    );
}