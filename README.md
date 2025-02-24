# JavaScript NaN Propagation Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to NaN (Not a Number) values and arithmetic operations.  The bug arises from the fact that any arithmetic operation involving NaN results in NaN.  The provided code attempts to handle null values but fails to account for the propagation of NaN.

## Bug Description

The `foo` function aims to add two numbers, gracefully handling null values.  However, if either input is NaN, the function returns NaN without explicitly indicating an error condition. This behavior can lead to unexpected results and difficult-to-debug issues in larger applications.

## Solution

The solution involves explicitly checking for NaN values and handling them appropriately. This might involve returning an error value, throwing an exception, or substituting a default value, depending on the specific requirements of the application.