select "g"."name",
count("fg".*)
from "genres" as "g"
join "filmGenre" as "fg" using ("genreId")
join "castMembers" as "cm" using ("filmId")
join "actors" as "a" using ("actorId")
where "a"."firstName" = 'Lisa'
  and "a"."lastName" = 'Monroe'
group by "g"."name";
