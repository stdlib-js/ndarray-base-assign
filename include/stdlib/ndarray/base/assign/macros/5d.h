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

#ifndef STDLIB_NDARRAY_BASE_ASSIGN_MACROS_5D_H
#define STDLIB_NDARRAY_BASE_ASSIGN_MACROS_5D_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Macro containing the preamble for nested loops which operate on elements of a five-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREAMBLE                                 \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	const int64_t *sx2 = stdlib_ndarray_strides( x2 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 4 ];                                                       \
		S1 = shape[ 3 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 1 ];                                                       \
		S4 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 4 ];                                                       \
		d1x1 = sx1[ 3 ] - ( S0*sx1[4] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[3] );                                       \
		d3x1 = sx1[ 1 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 0 ] - ( S3*sx1[1] );                                       \
		d0x2 = sx2[ 4 ];                                                       \
		d1x2 = sx2[ 3 ] - ( S0*sx2[4] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[3] );                                       \
		d3x2 = sx2[ 1 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 0 ] - ( S3*sx2[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
		d3x2 = sx2[ 3 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 4 ] - ( S3*sx2[3] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i4 = 0; i4 < S4; i4++, px1 += d4x1, px2 += d4x2 ) {                  \
		for ( i3 = 0; i3 < S3; i3++, px1 += d3x1, px2 += d3x2 ) {              \
			for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2 ) {          \
				for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2 ) {      \
					for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the preamble for nested loops which operate on elements of a five-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_TWO_OUT_PREAMBLE                         \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const struct ndarray *x3 = arrays[ 2 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	const int64_t *sx2 = stdlib_ndarray_strides( x2 );                         \
	const int64_t *sx3 = stdlib_ndarray_strides( x3 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px3 = stdlib_ndarray_data( x3 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t d0x3;                                                              \
	int64_t d1x3;                                                              \
	int64_t d2x3;                                                              \
	int64_t d3x3;                                                              \
	int64_t d4x3;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 4 ];                                                       \
		S1 = shape[ 3 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 1 ];                                                       \
		S4 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 4 ];                                                       \
		d1x1 = sx1[ 3 ] - ( S0*sx1[4] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[3] );                                       \
		d3x1 = sx1[ 1 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 0 ] - ( S3*sx1[1] );                                       \
		d0x2 = sx2[ 4 ];                                                       \
		d1x2 = sx2[ 3 ] - ( S0*sx2[4] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[3] );                                       \
		d3x2 = sx2[ 1 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 0 ] - ( S3*sx2[1] );                                       \
		d0x3 = sx3[ 4 ];                                                       \
		d1x3 = sx3[ 3 ] - ( S0*sx3[4] );                                       \
		d2x3 = sx3[ 2 ] - ( S1*sx3[3] );                                       \
		d3x3 = sx3[ 1 ] - ( S2*sx3[2] );                                       \
		d4x3 = sx3[ 0 ] - ( S3*sx3[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
		d3x2 = sx2[ 3 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 4 ] - ( S3*sx2[3] );                                       \
		d0x3 = sx3[ 0 ];                                                       \
		d1x3 = sx3[ 1 ] - ( S0*sx3[0] );                                       \
		d2x3 = sx3[ 2 ] - ( S1*sx3[1] );                                       \
		d3x3 = sx3[ 3 ] - ( S2*sx3[2] );                                       \
		d4x3 = sx3[ 4 ] - ( S3*sx3[3] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	px3 += stdlib_ndarray_offset( x3 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i4 = 0; i4 < S4; i4++, px1 += d4x1, px2 += d4x2, px3 += d4x3 ) {     \
		for ( i3 = 0; i3 < S3; i3++, px1 += d3x1, px2 += d3x2, px3 += d3x3 ) { \
			for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2, px3 += d2x3 ) { \
				for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2, px3 += d1x3 ) { \
					for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2, px3 += d0x3 )

/**
* Macro containing the epilogue for nested loops which operate on elements of a five-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE                                 \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}

/**
* Macro for a unary five-dimensional ndarray loop which which casts input ndarray elements and performs assignment.
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
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_CAST( double, double )
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_CAST( tin, tout )                        \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)x;                                                \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE

/**
* Macro for a unary five-dimensional loop which does not cast input ndarray elements (e.g., a `struct`).
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
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_NOCAST( tin, tout )                      \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = x;                                                      \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE

/**
* Macro for a unary five-dimensional ndarray loop which casts input ndarray elements to a different type via a casting function.
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
* STDLIB_NDARRAY_ASSIGN_5D_LOOP_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_ASSIGN_5D_LOOP_CAST_FCN( tin, tout, cout )              \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = cout( x );                                              \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_ASSIGN_MACROS_5D_H
