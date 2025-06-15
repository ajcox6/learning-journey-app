'use client';
import { BaseSyntheticEvent, useState } from "react";
import FilterButtons from "../ui/filter-buttons";
import ItemList from "../ui/items-list";
import { Item, Status } from "../ui/item";

export default function Journeys(props: { journeys: Item[] | null }) {

    const [journeys] = useState(props.journeys);
    const [items, setItems] = useState(props.journeys);
    const [selectedFilter, setSelectedFilter] = useState(Status.ALL);

    /**
     * Filter the items in the list and set the selected filter value
     * @param event button clicked event
     */
    const filterButton = (event: BaseSyntheticEvent) => {
        const status = event.target.value;

        if (status === Status.IN_PROGRESS) {
            setItems(journeys && journeys.filter((item: Item) => item.status === Status.IN_PROGRESS));
            setSelectedFilter(Status.IN_PROGRESS);
        } else if (status === Status.COMPLETED) {
            setItems(journeys && journeys.filter((item: Item) => item.status === Status.COMPLETED));
            setSelectedFilter(Status.COMPLETED);
        } else {
            setSelectedFilter(Status.ALL);
            setItems(journeys);
        }
    }

    return (
        <><FilterButtons selectedFilter={selectedFilter} click={filterButton} /><ItemList items={items} /></>
    );
}
