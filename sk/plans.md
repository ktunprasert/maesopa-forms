the order will be a single collection containing multiple JSON fields with 'have', 'want', 'received'
- have
- want
- received
- notes
- shop
- date
where date and shop are unique indexes
the order will have a shop tied to it

orders can only be created once logged in
orders can be created from the template which will automatically inputs all the products readied for that day

there will be a login flow where you can combine orders to shop in a nice viewable format
the combination of the orders will be selectable
the flow of 'received' is a non-auth page based on order id but they will only be able to select to see which have been selected when doing the order page
orders can be finalised meaning no more changes can be done to it
there should be a view page for the order for tracking statuses
order will be serialisable to text for copy pasting through line
