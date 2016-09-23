---
layout: documentation
title: List of iterator variables (loop, for and foreach)
---

Those variables are special variables that are automatically added to the $dwoo variables when you run an iterator plugin (foreach, loop or for).

## Variables
* **first** (bool) : true if the item being processed is the first, false otherwise
* **last** (bool) : true if the item being processed is the last one, false otherwise
* **index** (int) : the index number (starts from 0 and increases by 1 at each iteration)
* **iteration** (int) : the iteration number (starts from 1 and increases by 1 at each iteration)
* **show** (bool) : true if the loop will display something, false otherwise
* **total** (int) : the total amount of items in the array

## Facts
* You access them through {$dwoo.<plugin (foreach, loop or for)>.<foreach name>.<var>}
* If you don't provide the name argument to a plugin, it will use the name "default" by default, which means that for example you can access a foreach var with {$dwoo.foreach.default.first}
* The $dwoo var can be shortened as $ which means that {$.foreach.default.first} would also work.