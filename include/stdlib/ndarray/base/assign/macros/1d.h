/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_NDARRAY_BASE_ASSIGN_MACROS_1D_H
#define STDLIB_NDARRAY_BASE_ASSIGN_MACROS_1D_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/**
* Macro containing the preamble for a loop which operates on elements of a one-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREAMBLE                                 \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t d0x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t S0;                                                                \
	int64_t i0;                                                                \
	/* Extract loop variables: dimensions and loop offset (pointer) increments... */ \
	S0 = shape[ 0 ];                                                           \
	d0x1 = sx1[ 0 ];                                                           \
	d0x2 = sx2[ 0 ];                                                           \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the preamble for a loop which operates on elements of a one-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_TWO_OUT_PREAMBLE                         \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	struct ndarray *x3 = arrays[ 2 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	int64_t *sx3 = stdlib_ndarray_strides( x3 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px3 = stdlib_ndarray_data( x3 );                                  \
	int64_t d0x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d0x3;                                                              \
	int64_t S0;                                                                \
	int64_t i0;                                                                \
	/* Extract loop variable: dimensions and loop offset (pointer) increments... */ \
	S0 = shape[ 0 ];                                                           \
	d0x1 = sx1[ 0 ];                                                           \
	d0x2 = sx2[ 0 ];                                                           \
	d0x3 = sx3[ 0 ];                                                           \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	px3 += stdlib_ndarray_offset( x3 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2, px3 += d0x3 )

/**
* Macro containing the epilogue for loops which operate on elements of a one-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which which casts input ndarray elements and performs assignment.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each retrieved ndarray element to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* // e.g., d_d
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_CAST( double, double )
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_CAST( tin, tout )                        \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)x;                                                \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional loop which does not cast input ndarray elements (e.g., a `struct`).
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Stores a retrieved element in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z_z
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_NOCAST( tin, tout )                      \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = x;                                                      \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which casts input ndarray elements to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each retrieved element via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., d_z
* STDLIB_NDARRAY_ASSIGN_1D_LOOP_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_ASSIGN_1D_LOOP_CAST_FCN( tin, tout, cout )              \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = cout( x );                                              \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_ASSIGN_MACROS_1D_H
