/* 
Given a table elements with the following structure:

  create table elements (
      v integer not null
  );
write an SQL query that returns the sum of the numbers in column v.

For example, given:

  v
  ---
  2
  10
  20
  10
your query should return 42.

use https://extendsclass.com/postgresql-online.html
to play with pg online 
*/

create table elements (v integer);
		insert into elements (v) values (1);
		insert into elements (v) values (3); 
		SELECT SUM (v) as total from elements;
        