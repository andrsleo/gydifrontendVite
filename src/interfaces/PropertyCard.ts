// interfaces/PropertyCard.ts
import { Property } from "./Property";

export interface PropertyCardProps {
    property: Property;
    showDescription?: boolean; // control si mostramos o no descripción
}
