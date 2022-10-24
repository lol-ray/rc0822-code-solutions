select "f"."releaseYear",
       "fg"."genreId",
       "g"."name" as "genre"
from "films" as "f"
join "filmGenre" as "fg" using ("filmId"),
     "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie';
