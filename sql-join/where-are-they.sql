select "a"."line1",
       "c"."name" as "city",
       "a"."district"
from "addresses" as "a"
join "cities" as "c" using ("cityId");
