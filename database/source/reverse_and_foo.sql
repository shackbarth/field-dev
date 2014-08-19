create or replace function fd.reverse_and_foo(str text) returns text stable as $$
  select reverse(str) || 'foo';
$$ language sql;
