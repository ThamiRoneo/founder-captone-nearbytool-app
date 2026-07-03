import { Link } from "react-router-dom";
import type { Item } from "../data/types.ts";
import { formatDistance, formatPostedRelative, formatPrice } from "../utils/format.ts";
import "./ItemCard.css";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const isPaused = item.status === "paused";

  return (
    <Link
      to={`/items/${item.id}`}
      className={`item-card${isPaused ? " item-card--paused" : ""}`}
      aria-label={`${item.title}${isPaused ? " (currently paused)" : ""}`}
    >
      <div className="item-card__photo">
        {item.photoUrls.length > 0 ? (
          <img src={item.photoUrls[0]} alt="" loading="lazy" />
        ) : (
          <div className="item-card__photo-placeholder" aria-hidden="true">
            <span>{item.title.charAt(0)}</span>
          </div>
        )}
        {isPaused && <span className="item-card__badge">Currently unavailable</span>}
      </div>

      <div className="item-card__body">
        <h3 className="item-card__title">{item.title}</h3>

        <p className="item-card__price">
          {item.price ? formatPrice(item.price) : "Free to borrow"}
        </p>

        <div className="item-card__meta">
          <span className="item-card__owner">{item.owner.displayName}</span>
          {item.owner.rating !== null ? (
            <span className="item-card__rating">
              ★ {item.owner.rating.toFixed(1)} ({item.owner.ratingCount})
            </span>
          ) : (
            <span className="item-card__rating item-card__rating--new">New neighbour</span>
          )}
        </div>

        <div className="item-card__footer">
          <span>{item.distanceKm !== null ? formatDistance(item.distanceKm) : "Distance unknown"}</span>
          <span aria-hidden="true">·</span>
          <span>{formatPostedRelative(item.postedISO)}</span>
        </div>
      </div>
    </Link>
  );
}
