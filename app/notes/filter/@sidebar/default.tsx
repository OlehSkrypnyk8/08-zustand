import Link from "next/link";
import css from "@/app/notes/filter/@sidebar/SidebarNotes.module.css";
import { NOTE_TAGS } from "@/types/note";

function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes/filter/all" className={css.menuLink}>
          All notes
        </Link>
      </li>
      {NOTE_TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default SidebarNotes;
