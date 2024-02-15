// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-complex-floating-point-data-type@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-real-data-type@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-ctors@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.0-esm/index.mjs";var p=[function(r,o){o.data[o.offset]=r.data[r.offset]},function(r,o){var s,f,t,e,a,d,i,c;for(a=r.shape[0],t=r.strides[0],e=o.strides[0],d=r.offset,i=o.offset,s=r.data,f=o.data,c=0;c<a;c++)f[i]=s[d],d+=t,i+=e},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u;for(i=r.shape,p=r.strides,h=o.strides,"row-major"===r.order?(c=i[1],n=i[0],t=p[1],e=p[0]-c*p[1],a=h[1],d=h[0]-c*h[1]):(c=i[0],n=i[1],t=p[0],e=p[1]-c*p[0],a=h[0],d=h[1]-c*h[0]),m=r.offset,y=o.offset,s=r.data,f=o.data,u=0;u<n;u++){for(v=0;v<c;v++)f[y]=s[m],m+=t,y+=a;m+=e,y+=d}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w;for(n=r.shape,y=r.strides,v=o.strides,"row-major"===r.order?(p=n[2],h=n[1],m=n[0],t=y[2],e=y[1]-p*y[2],a=y[0]-h*y[1],d=v[2],i=v[1]-p*v[2],c=v[0]-h*v[1]):(p=n[0],h=n[1],m=n[2],t=y[0],e=y[1]-p*y[0],a=y[2]-h*y[1],d=v[0],i=v[1]-p*v[0],c=v[2]-h*v[1]),u=r.offset,l=o.offset,s=r.data,f=o.data,w=0;w<m;w++){for(x=0;x<h;x++){for(j=0;j<p;j++)f[l]=s[u],u+=t,l+=d;u+=e,l+=i}u+=a,l+=c}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k;for(h=r.shape,l=r.strides,j=o.strides,"row-major"===r.order?(m=h[3],y=h[2],v=h[1],u=h[0],t=l[3],e=l[2]-m*l[3],a=l[1]-y*l[2],d=l[0]-v*l[1],i=j[3],c=j[2]-m*j[3],n=j[1]-y*j[2],p=j[0]-v*j[1]):(m=h[0],y=h[1],v=h[2],u=h[3],t=l[0],e=l[1]-m*l[0],a=l[2]-y*l[1],d=l[3]-v*l[2],i=j[0],c=j[1]-m*j[0],n=j[2]-y*j[1],p=j[3]-v*j[2]),x=r.offset,w=o.offset,s=r.data,f=o.data,k=0;k<u;k++){for(P=0;P<v;P++){for(g=0;g<y;g++){for(b=0;b<m;b++)f[w]=s[x],x+=t,w+=i;x+=e,w+=c}x+=a,w+=n}x+=d,w+=p}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q;for(y=r.shape,w=r.strides,b=o.strides,"row-major"===r.order?(v=y[4],u=y[3],l=y[2],j=y[1],x=y[0],t=w[4],e=w[3]-v*w[4],a=w[2]-u*w[3],d=w[1]-l*w[2],i=w[0]-j*w[1],c=b[4],n=b[3]-v*b[4],p=b[2]-u*b[3],h=b[1]-l*b[2],m=b[0]-j*b[1]):(v=y[0],u=y[1],l=y[2],j=y[3],x=y[4],t=w[0],e=w[1]-v*w[0],a=w[2]-u*w[1],d=w[3]-l*w[2],i=w[4]-j*w[3],c=b[0],n=b[1]-v*b[0],p=b[2]-u*b[1],h=b[3]-l*b[2],m=b[4]-j*b[3]),g=r.offset,P=o.offset,s=r.data,f=o.data,q=0;q<x;q++){for(z=0;z<j;z++){for(E=0;E<l;E++){for(A=0;A<u;A++){for(k=0;k<v;k++)f[P]=s[g],g+=t,P+=c;g+=e,P+=n}g+=a,P+=p}g+=d,P+=h}g+=i,P+=m}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F;for(u=r.shape,P=r.strides,k=o.strides,"row-major"===r.order?(l=u[5],j=u[4],x=u[3],w=u[2],b=u[1],g=u[0],t=P[5],e=P[4]-l*P[5],a=P[3]-j*P[4],d=P[2]-x*P[3],i=P[1]-w*P[2],c=P[0]-b*P[1],n=k[5],p=k[4]-l*k[5],h=k[3]-j*k[4],m=k[2]-x*k[3],y=k[1]-w*k[2],v=k[0]-b*k[1]):(l=u[0],j=u[1],x=u[2],w=u[3],b=u[4],g=u[5],t=P[0],e=P[1]-l*P[0],a=P[2]-j*P[1],d=P[3]-x*P[2],i=P[4]-w*P[3],c=P[5]-b*P[4],n=k[0],p=k[1]-l*k[0],h=k[2]-j*k[1],m=k[3]-x*k[2],y=k[4]-w*k[3],v=k[5]-b*k[4]),A=r.offset,E=o.offset,s=r.data,f=o.data,F=0;F<g;F++){for(D=0;D<b;D++){for(C=0;C<w;C++){for(B=0;B<x;B++){for(q=0;q<j;q++){for(z=0;z<l;z++)f[E]=s[A],A+=t,E+=n;A+=e,E+=p}A+=a,E+=h}A+=d,E+=m}A+=i,E+=y}A+=c,E+=v}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J;for(j=r.shape,E=r.strides,z=o.strides,"row-major"===r.order?(x=j[6],w=j[5],b=j[4],g=j[3],P=j[2],k=j[1],A=j[0],t=E[6],e=E[5]-x*E[6],a=E[4]-w*E[5],d=E[3]-b*E[4],i=E[2]-g*E[3],c=E[1]-P*E[2],n=E[0]-k*E[1],p=z[6],h=z[5]-x*z[6],m=z[4]-w*z[5],y=z[3]-b*z[4],v=z[2]-g*z[3],u=z[1]-P*z[2],l=z[0]-k*z[1]):(x=j[0],w=j[1],b=j[2],g=j[3],P=j[4],k=j[5],A=j[6],t=E[0],e=E[1]-x*E[0],a=E[2]-w*E[1],d=E[3]-b*E[2],i=E[4]-g*E[3],c=E[5]-P*E[4],n=E[6]-k*E[5],p=z[0],h=z[1]-x*z[0],m=z[2]-w*z[1],y=z[3]-b*z[2],v=z[4]-g*z[3],u=z[5]-P*z[4],l=z[6]-k*z[5]),q=r.offset,B=o.offset,s=r.data,f=o.data,J=0;J<A;J++){for(I=0;I<k;I++){for(H=0;H<P;H++){for(G=0;G<g;G++){for(F=0;F<b;F++){for(D=0;D<w;D++){for(C=0;C<x;C++)f[B]=s[q],q+=t,B+=p;q+=e,B+=h}q+=a,B+=m}q+=d,B+=y}q+=i,B+=v}q+=c,B+=u}q+=n,B+=l}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N;for(w=r.shape,B=r.strides,C=o.strides,"row-major"===r.order?(b=w[7],g=w[6],P=w[5],k=w[4],A=w[3],E=w[2],z=w[1],q=w[0],t=B[7],e=B[6]-b*B[7],a=B[5]-g*B[6],d=B[4]-P*B[5],i=B[3]-k*B[4],c=B[2]-A*B[3],n=B[1]-E*B[2],p=B[0]-z*B[1],h=C[7],m=C[6]-b*C[7],y=C[5]-g*C[6],v=C[4]-P*C[5],u=C[3]-k*C[4],l=C[2]-A*C[3],j=C[1]-E*C[2],x=C[0]-z*C[1]):(b=w[0],g=w[1],P=w[2],k=w[3],A=w[4],E=w[5],z=w[6],q=w[7],t=B[0],e=B[1]-b*B[0],a=B[2]-g*B[1],d=B[3]-P*B[2],i=B[4]-k*B[3],c=B[5]-A*B[4],n=B[6]-E*B[5],p=B[7]-z*B[6],h=C[0],m=C[1]-b*C[0],y=C[2]-g*C[1],v=C[3]-P*C[2],u=C[4]-k*C[3],l=C[5]-A*C[4],j=C[6]-E*C[5],x=C[7]-z*C[6]),D=r.offset,F=o.offset,s=r.data,f=o.data,N=0;N<q;N++){for(M=0;M<z;M++){for(L=0;L<E;L++){for(K=0;K<A;K++){for(J=0;J<k;J++){for(I=0;I<P;I++){for(H=0;H<g;H++){for(G=0;G<b;G++)f[F]=s[D],D+=t,F+=h;D+=e,F+=m}D+=a,F+=y}D+=d,F+=v}D+=i,F+=u}D+=c,F+=l}D+=n,F+=j}D+=p,F+=x}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S;for(g=r.shape,F=r.strides,G=o.strides,"row-major"===r.order?(P=g[8],k=g[7],A=g[6],E=g[5],z=g[4],q=g[3],B=g[2],C=g[1],D=g[0],t=F[8],e=F[7]-P*F[8],a=F[6]-k*F[7],d=F[5]-A*F[6],i=F[4]-E*F[5],c=F[3]-z*F[4],n=F[2]-q*F[3],p=F[1]-B*F[2],h=F[0]-C*F[1],m=G[8],y=G[7]-P*G[8],v=G[6]-k*G[7],u=G[5]-A*G[6],l=G[4]-E*G[5],j=G[3]-z*G[4],x=G[2]-q*G[3],w=G[1]-B*G[2],b=G[0]-C*G[1]):(P=g[0],k=g[1],A=g[2],E=g[3],z=g[4],q=g[5],B=g[6],C=g[7],D=g[8],t=F[0],e=F[1]-P*F[0],a=F[2]-k*F[1],d=F[3]-A*F[2],i=F[4]-E*F[3],c=F[5]-z*F[4],n=F[6]-q*F[5],p=F[7]-B*F[6],h=F[8]-C*F[7],m=G[0],y=G[1]-P*G[0],v=G[2]-k*G[1],u=G[3]-A*G[2],l=G[4]-E*G[3],j=G[5]-z*G[4],x=G[6]-q*G[5],w=G[7]-B*G[6],b=G[8]-C*G[7]),H=r.offset,I=o.offset,s=r.data,f=o.data,S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(N=0;N<z;N++){for(M=0;M<E;M++){for(L=0;L<A;L++){for(K=0;K<k;K++){for(J=0;J<P;J++)f[I]=s[H],H+=t,I+=m;H+=e,I+=y}H+=a,I+=v}H+=d,I+=u}H+=i,I+=l}H+=c,I+=j}H+=n,I+=x}H+=p,I+=w}H+=h,I+=b}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W;for(k=r.shape,I=r.strides,J=o.strides,"row-major"===r.order?(A=k[9],E=k[8],z=k[7],q=k[6],B=k[5],C=k[4],D=k[3],F=k[2],G=k[1],H=k[0],t=I[9],e=I[8]-A*I[9],a=I[7]-E*I[8],d=I[6]-z*I[7],i=I[5]-q*I[6],c=I[4]-B*I[5],n=I[3]-C*I[4],p=I[2]-D*I[3],h=I[1]-F*I[2],m=I[0]-G*I[1],y=J[9],v=J[8]-A*J[9],u=J[7]-E*J[8],l=J[6]-z*J[7],j=J[5]-q*J[6],x=J[4]-B*J[5],w=J[3]-C*J[4],b=J[2]-D*J[3],g=J[1]-F*J[2],P=J[0]-G*J[1]):(A=k[0],E=k[1],z=k[2],q=k[3],B=k[4],C=k[5],D=k[6],F=k[7],G=k[8],H=k[9],t=I[0],e=I[1]-A*I[0],a=I[2]-E*I[1],d=I[3]-z*I[2],i=I[4]-q*I[3],c=I[5]-B*I[4],n=I[6]-C*I[5],p=I[7]-D*I[6],h=I[8]-F*I[7],m=I[9]-G*I[8],y=J[0],v=J[1]-A*J[0],u=J[2]-E*J[1],l=J[3]-z*J[2],j=J[4]-q*J[3],x=J[5]-B*J[4],w=J[6]-C*J[5],b=J[7]-D*J[6],g=J[8]-F*J[7],P=J[9]-G*J[8]),K=r.offset,L=o.offset,s=r.data,f=o.data,W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<z;O++){for(N=0;N<E;N++){for(M=0;M<A;M++)f[L]=s[K],K+=t,L+=y;K+=e,L+=v}K+=a,L+=u}K+=d,L+=l}K+=i,L+=j}K+=c,L+=x}K+=n,L+=w}K+=p,L+=b}K+=h,L+=g}K+=m,L+=P}}],h=[function(r,o){o.accessors[1](o.data,o.offset,r.accessors[0](r.data,r.offset))},function(r,o){var s,f,t,e,a,d,i,c,n,p;for(i=r.shape[0],a=r.strides[0],d=o.strides[0],c=r.offset,n=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],p=0;p<i;p++)e(f,n,t(s,c)),c+=a,n+=d},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j;for(n=r.shape,m=r.strides,y=o.strides,"row-major"===r.order?(p=n[1],h=n[0],a=m[1],d=m[0]-p*m[1],i=y[1],c=y[0]-p*y[1]):(p=n[0],h=n[1],a=m[0],d=m[1]-p*m[0],i=y[0],c=y[1]-p*y[0]),v=r.offset,u=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],j=0;j<h;j++){for(l=0;l<p;l++)e(f,u,t(s,v)),v+=a,u+=i;v+=d,u+=c}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g;for(h=r.shape,u=r.strides,l=o.strides,"row-major"===r.order?(m=h[2],y=h[1],v=h[0],a=u[2],d=u[1]-m*u[2],i=u[0]-y*u[1],c=l[2],n=l[1]-m*l[2],p=l[0]-y*l[1]):(m=h[0],y=h[1],v=h[2],a=u[0],d=u[1]-m*u[0],i=u[2]-y*u[1],c=l[0],n=l[1]-m*l[0],p=l[2]-y*l[1]),j=r.offset,x=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],g=0;g<v;g++){for(b=0;b<y;b++){for(w=0;w<m;w++)e(f,x,t(s,j)),j+=a,x+=c;j+=d,x+=n}j+=i,x+=p}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E;for(y=r.shape,x=r.strides,w=o.strides,"row-major"===r.order?(v=y[3],u=y[2],l=y[1],j=y[0],a=x[3],d=x[2]-v*x[3],i=x[1]-u*x[2],c=x[0]-l*x[1],n=w[3],p=w[2]-v*w[3],h=w[1]-u*w[2],m=w[0]-l*w[1]):(v=y[0],u=y[1],l=y[2],j=y[3],a=x[0],d=x[1]-v*x[0],i=x[2]-u*x[1],c=x[3]-l*x[2],n=w[0],p=w[1]-v*w[0],h=w[2]-u*w[1],m=w[3]-l*w[2]),b=r.offset,g=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],E=0;E<j;E++){for(A=0;A<l;A++){for(k=0;k<u;k++){for(P=0;P<v;P++)e(f,g,t(s,b)),b+=a,g+=n;b+=d,g+=p}b+=i,g+=h}b+=c,g+=m}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C;for(u=r.shape,g=r.strides,P=o.strides,"row-major"===r.order?(l=u[4],j=u[3],x=u[2],w=u[1],b=u[0],a=g[4],d=g[3]-l*g[4],i=g[2]-j*g[3],c=g[1]-x*g[2],n=g[0]-w*g[1],p=P[4],h=P[3]-l*P[4],m=P[2]-j*P[3],y=P[1]-x*P[2],v=P[0]-w*P[1]):(l=u[0],j=u[1],x=u[2],w=u[3],b=u[4],a=g[0],d=g[1]-l*g[0],i=g[2]-j*g[1],c=g[3]-x*g[2],n=g[4]-w*g[3],p=P[0],h=P[1]-l*P[0],m=P[2]-j*P[1],y=P[3]-x*P[2],v=P[4]-w*P[3]),k=r.offset,A=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],C=0;C<b;C++){for(B=0;B<w;B++){for(q=0;q<x;q++){for(z=0;z<j;z++){for(E=0;E<l;E++)e(f,A,t(s,k)),k+=a,A+=p;k+=d,A+=h}k+=i,A+=m}k+=c,A+=y}k+=n,A+=v}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H;for(j=r.shape,A=r.strides,E=o.strides,"row-major"===r.order?(x=j[5],w=j[4],b=j[3],g=j[2],P=j[1],k=j[0],a=A[5],d=A[4]-x*A[5],i=A[3]-w*A[4],c=A[2]-b*A[3],n=A[1]-g*A[2],p=A[0]-P*A[1],h=E[5],m=E[4]-x*E[5],y=E[3]-w*E[4],v=E[2]-b*E[3],u=E[1]-g*E[2],l=E[0]-P*E[1]):(x=j[0],w=j[1],b=j[2],g=j[3],P=j[4],k=j[5],a=A[0],d=A[1]-x*A[0],i=A[2]-w*A[1],c=A[3]-b*A[2],n=A[4]-g*A[3],p=A[5]-P*A[4],h=E[0],m=E[1]-x*E[0],y=E[2]-w*E[1],v=E[3]-b*E[2],u=E[4]-g*E[3],l=E[5]-P*E[4]),z=r.offset,q=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(D=0;D<b;D++){for(C=0;C<w;C++){for(B=0;B<x;B++)e(f,q,t(s,z)),z+=a,q+=h;z+=d,q+=m}z+=i,q+=y}z+=c,q+=v}z+=n,q+=u}z+=p,q+=l}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L;for(w=r.shape,q=r.strides,B=o.strides,"row-major"===r.order?(b=w[6],g=w[5],P=w[4],k=w[3],A=w[2],E=w[1],z=w[0],a=q[6],d=q[5]-b*q[6],i=q[4]-g*q[5],c=q[3]-P*q[4],n=q[2]-k*q[3],p=q[1]-A*q[2],h=q[0]-E*q[1],m=B[6],y=B[5]-b*B[6],v=B[4]-g*B[5],u=B[3]-P*B[4],l=B[2]-k*B[3],j=B[1]-A*B[2],x=B[0]-E*B[1]):(b=w[0],g=w[1],P=w[2],k=w[3],A=w[4],E=w[5],z=w[6],a=q[0],d=q[1]-b*q[0],i=q[2]-g*q[1],c=q[3]-P*q[2],n=q[4]-k*q[3],p=q[5]-A*q[4],h=q[6]-E*q[5],m=B[0],y=B[1]-b*B[0],v=B[2]-g*B[1],u=B[3]-P*B[2],l=B[4]-k*B[3],j=B[5]-A*B[4],x=B[6]-E*B[5]),C=r.offset,D=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],L=0;L<z;L++){for(K=0;K<E;K++){for(J=0;J<A;J++){for(I=0;I<k;I++){for(H=0;H<P;H++){for(G=0;G<g;G++){for(F=0;F<b;F++)e(f,D,t(s,C)),C+=a,D+=m;C+=d,D+=y}C+=i,D+=v}C+=c,D+=u}C+=n,D+=l}C+=p,D+=j}C+=h,D+=x}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q;for(g=r.shape,D=r.strides,F=o.strides,"row-major"===r.order?(P=g[7],k=g[6],A=g[5],E=g[4],z=g[3],q=g[2],B=g[1],C=g[0],a=D[7],d=D[6]-P*D[7],i=D[5]-k*D[6],c=D[4]-A*D[5],n=D[3]-E*D[4],p=D[2]-z*D[3],h=D[1]-q*D[2],m=D[0]-B*D[1],y=F[7],v=F[6]-P*F[7],u=F[5]-k*F[6],l=F[4]-A*F[5],j=F[3]-E*F[4],x=F[2]-z*F[3],w=F[1]-q*F[2],b=F[0]-B*F[1]):(P=g[0],k=g[1],A=g[2],E=g[3],z=g[4],q=g[5],B=g[6],C=g[7],a=D[0],d=D[1]-P*D[0],i=D[2]-k*D[1],c=D[3]-A*D[2],n=D[4]-E*D[3],p=D[5]-z*D[4],h=D[6]-q*D[5],m=D[7]-B*D[6],y=F[0],v=F[1]-P*F[0],u=F[2]-k*F[1],l=F[3]-A*F[2],j=F[4]-E*F[3],x=F[5]-z*F[4],w=F[6]-q*F[5],b=F[7]-B*F[6]),G=r.offset,H=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<z;M++){for(L=0;L<E;L++){for(K=0;K<A;K++){for(J=0;J<k;J++){for(I=0;I<P;I++)e(f,H,t(s,G)),G+=a,H+=y;G+=d,H+=v}G+=i,H+=u}G+=c,H+=l}G+=n,H+=j}G+=p,H+=x}G+=h,H+=w}G+=m,H+=b}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U;for(k=r.shape,H=r.strides,I=o.strides,"row-major"===r.order?(A=k[8],E=k[7],z=k[6],q=k[5],B=k[4],C=k[3],D=k[2],F=k[1],G=k[0],a=H[8],d=H[7]-A*H[8],i=H[6]-E*H[7],c=H[5]-z*H[6],n=H[4]-q*H[5],p=H[3]-B*H[4],h=H[2]-C*H[3],m=H[1]-D*H[2],y=H[0]-F*H[1],v=I[8],u=I[7]-A*I[8],l=I[6]-E*I[7],j=I[5]-z*I[6],x=I[4]-q*I[5],w=I[3]-B*I[4],b=I[2]-C*I[3],g=I[1]-D*I[2],P=I[0]-F*I[1]):(A=k[0],E=k[1],z=k[2],q=k[3],B=k[4],C=k[5],D=k[6],F=k[7],G=k[8],a=H[0],d=H[1]-A*H[0],i=H[2]-E*H[1],c=H[3]-z*H[2],n=H[4]-q*H[3],p=H[5]-B*H[4],h=H[6]-C*H[5],m=H[7]-D*H[6],y=H[8]-F*H[7],v=I[0],u=I[1]-A*I[0],l=I[2]-E*I[1],j=I[3]-z*I[2],x=I[4]-q*I[3],w=I[5]-B*I[4],b=I[6]-C*I[5],g=I[7]-D*I[6],P=I[8]-F*I[7]),J=r.offset,K=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(N=0;N<z;N++){for(M=0;M<E;M++){for(L=0;L<A;L++)e(f,K,t(s,J)),J+=a,K+=v;J+=d,K+=u}J+=i,K+=l}J+=c,K+=j}J+=n,K+=x}J+=p,K+=w}J+=h,K+=b}J+=m,K+=g}J+=y,K+=P}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y;for(E=r.shape,K=r.strides,L=o.strides,"row-major"===r.order?(z=E[9],q=E[8],B=E[7],C=E[6],D=E[5],F=E[4],G=E[3],H=E[2],I=E[1],J=E[0],a=K[9],d=K[8]-z*K[9],i=K[7]-q*K[8],c=K[6]-B*K[7],n=K[5]-C*K[6],p=K[4]-D*K[5],h=K[3]-F*K[4],m=K[2]-G*K[3],y=K[1]-H*K[2],v=K[0]-I*K[1],u=L[9],l=L[8]-z*L[9],j=L[7]-q*L[8],x=L[6]-B*L[7],w=L[5]-C*L[6],b=L[4]-D*L[5],g=L[3]-F*L[4],P=L[2]-G*L[3],k=L[1]-H*L[2],A=L[0]-I*L[1]):(z=E[0],q=E[1],B=E[2],C=E[3],D=E[4],F=E[5],G=E[6],H=E[7],I=E[8],J=E[9],a=K[0],d=K[1]-z*K[0],i=K[2]-q*K[1],c=K[3]-B*K[2],n=K[4]-C*K[3],p=K[5]-D*K[4],h=K[6]-F*K[5],m=K[7]-G*K[6],y=K[8]-H*K[7],v=K[9]-I*K[8],u=L[0],l=L[1]-z*L[0],j=L[2]-q*L[1],x=L[3]-B*L[2],w=L[4]-C*L[3],b=L[5]-D*L[4],g=L[6]-F*L[5],P=L[7]-G*L[6],k=L[8]-H*L[7],A=L[9]-I*L[8]),M=r.offset,N=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],Y=0;Y<J;Y++){for(X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<z;O++)e(f,N,t(s,M)),M+=a,N+=u;M+=d,N+=l}M+=i,N+=j}M+=c,N+=x}M+=n,N+=w}M+=p,N+=b}M+=h,N+=g}M+=m,N+=P}M+=y,N+=k}M+=v,N+=A}}],m=[function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E;for(m=(E=d(r.shape,r.strides,o.strides)).sh,u=E.sx,l=E.sy,s=i(r.dtype,o.dtype),j=r.offset,x=o.offset,f=r.data,t=o.data,e=u[0],c=l[0],A=m[1];A>0;)for(A<s?(v=A,A=0):(v=s,A-=s),p=j+A*u[1],h=x+A*l[1],k=m[0];k>0;)for(k<s?(y=k,k=0):(y=s,k-=s),w=p+k*u[0],b=h+k*l[0],a=u[1]-y*u[0],n=l[1]-y*l[0],P=0;P<v;P++){for(g=0;g<y;g++)t[b]=f[w],w+=e,b+=c;w+=a,b+=n}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G;for(l=(G=d(r.shape,r.strides,o.strides)).sh,b=G.sx,g=G.sy,s=i(r.dtype,o.dtype),P=r.offset,k=o.offset,f=r.data,t=o.data,e=b[0],n=g[0],F=l[2];F>0;)for(F<s?(w=F,F=0):(w=s,F-=s),y=P+F*b[2],u=k+F*g[2],D=l[1];D>0;)for(D<s?(x=D,D=0):(x=s,D-=s),c=b[2]-x*b[1],h=g[2]-x*g[1],m=y+D*b[1],v=u+D*g[1],C=l[0];C>0;)for(C<s?(j=C,C=0):(j=s,C-=s),A=m+C*b[0],E=v+C*g[0],a=b[1]-j*b[0],p=g[1]-j*g[0],B=0;B<w;B++){for(q=0;q<x;q++){for(z=0;z<j;z++)t[E]=f[A],A+=e,E+=n;A+=a,E+=p}A+=c,E+=h}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N;for(b=(N=d(r.shape,r.strides,o.strides)).sh,E=N.sx,z=N.sy,s=i(r.dtype,o.dtype),q=r.offset,B=o.offset,f=r.data,t=o.data,e=E[0],p=z[0],M=b[3];M>0;)for(M<s?(A=M,M=0):(A=s,M-=s),l=q+M*E[3],w=B+M*z[3],L=b[2];L>0;)for(L<s?(k=L,L=0):(k=s,L-=s),n=E[3]-k*E[2],y=z[3]-k*z[2],u=l+L*E[2],x=w+L*z[2],K=b[1];K>0;)for(K<s?(P=K,K=0):(P=s,K-=s),c=E[2]-P*E[1],m=z[2]-P*z[1],v=u+K*E[1],j=x+K*z[1],J=b[0];J>0;)for(J<s?(g=J,J=0):(g=s,J-=s),C=v+J*E[0],D=j+J*z[0],a=E[1]-g*E[0],h=z[1]-g*z[0],I=0;I<A;I++){for(H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++)t[D]=f[C],C+=e,D+=p;C+=a,D+=h}C+=c,D+=m}C+=n,D+=y}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V;for(A=(V=d(r.shape,r.strides,o.strides)).sh,D=V.sx,F=V.sy,s=i(r.dtype,o.dtype),G=r.offset,H=o.offset,f=r.data,t=o.data,e=D[0],h=F[0],U=A[4];U>0;)for(U<s?(C=U,U=0):(C=s,U-=s),w=G+U*D[4],k=H+U*F[4],T=A[3];T>0;)for(T<s?(B=T,T=0):(B=s,T-=s),p=D[4]-B*D[3],u=F[4]-B*F[3],x=w+T*D[3],P=k+T*F[3],S=A[2];S>0;)for(S<s?(q=S,S=0):(q=s,S-=s),n=D[3]-q*D[2],v=F[3]-q*F[2],j=x+S*D[2],g=P+S*F[2],R=A[1];R>0;)for(R<s?(z=R,R=0):(z=s,R-=s),c=D[2]-z*D[1],y=F[2]-z*F[1],l=j+R*D[1],b=g+R*F[1],Q=A[0];Q>0;)for(Q<s?(E=Q,Q=0):(E=s,Q-=s),I=l+Q*D[0],J=b+Q*F[0],a=D[1]-E*D[0],m=F[1]-E*F[0],O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<q;M++){for(L=0;L<z;L++){for(K=0;K<E;K++)t[J]=f[I],I+=e,J+=h;I+=a,J+=m}I+=c,J+=y}I+=n,J+=v}I+=p,J+=u}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(B=(rr=d(r.shape,r.strides,o.strides)).sh,J=rr.sx,K=rr.sy,s=i(r.dtype,o.dtype),L=r.offset,M=o.offset,f=r.data,t=o.data,e=J[0],m=K[0],_=B[5];_>0;)for(_<s?(I=_,_=0):(I=s,_-=s),P=L+_*J[5],q=M+_*K[5],$=B[4];$>0;)for($<s?(H=$,$=0):(H=s,$-=s),h=J[5]-H*J[4],j=K[5]-H*K[4],g=P+$*J[4],z=q+$*K[4],Z=B[3];Z>0;)for(Z<s?(G=Z,Z=0):(G=s,Z-=s),p=J[4]-G*J[3],l=K[4]-G*K[3],b=g+Z*J[3],E=z+Z*K[3],Y=B[2];Y>0;)for(Y<s?(F=Y,Y=0):(F=s,Y-=s),n=J[3]-F*J[2],u=K[3]-F*K[2],w=b+Y*J[2],A=E+Y*K[2],X=B[1];X>0;)for(X<s?(D=X,X=0):(D=s,X-=s),c=J[2]-D*J[1],v=K[2]-D*K[1],x=w+X*J[1],k=A+X*K[1],W=B[0];W>0;)for(W<s?(C=W,W=0):(C=s,W-=s),N=x+W*J[0],O=k+W*K[0],a=J[1]-C*J[0],y=K[1]-C*K[0],V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++)t[O]=f[N],N+=e,O+=m;N+=a,O+=y}N+=c,O+=v}N+=n,O+=u}N+=p,O+=l}N+=h,O+=j}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr;for(G=(dr=d(r.shape,r.strides,o.strides)).sh,O=dr.sx,Q=dr.sy,s=i(r.dtype,o.dtype),R=r.offset,S=o.offset,f=r.data,t=o.data,e=O[0],y=Q[0],ar=G[6];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),E=R+ar*O[6],F=S+ar*Q[6],er=G[5];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),m=O[6]-M*O[5],w=Q[6]-M*Q[5],A=E+er*O[5],D=F+er*Q[5],tr=G[4];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),h=O[5]-L*O[4],x=Q[5]-L*Q[4],k=A+tr*O[4],C=D+tr*Q[4],fr=G[3];fr>0;)for(fr<s?(K=fr,fr=0):(K=s,fr-=s),p=O[4]-K*O[3],j=Q[4]-K*Q[3],P=k+fr*O[3],B=C+fr*Q[3],sr=G[2];sr>0;)for(sr<s?(J=sr,sr=0):(J=s,sr-=s),n=O[3]-J*O[2],l=Q[3]-J*Q[2],g=P+sr*O[2],q=B+sr*Q[2],or=G[1];or>0;)for(or<s?(I=or,or=0):(I=s,or-=s),c=O[2]-I*O[1],u=Q[2]-I*Q[1],b=g+or*O[1],z=q+or*Q[1],rr=G[0];rr>0;)for(rr<s?(H=rr,rr=0):(H=s,rr-=s),T=b+rr*O[0],U=z+rr*Q[0],a=O[1]-H*O[0],v=Q[1]-H*Q[0],_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++)t[U]=f[T],T+=e,U+=y;T+=a,U+=v}T+=c,U+=u}T+=n,U+=l}T+=p,U+=j}T+=h,U+=x}T+=m,U+=w}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr;for(K=(yr=d(r.shape,r.strides,o.strides)).sh,U=yr.sx,V=yr.sy,s=i(r.dtype,o.dtype),W=r.offset,X=o.offset,f=r.data,t=o.data,e=U[0],v=V[0],mr=K[7];mr>0;)for(mr<s?(T=mr,mr=0):(T=s,mr-=s),B=W+mr*U[7],J=X+mr*V[7],hr=K[6];hr>0;)for(hr<s?(S=hr,hr=0):(S=s,hr-=s),y=U[7]-S*U[6],g=V[7]-S*V[6],q=B+hr*U[6],I=J+hr*V[6],pr=K[5];pr>0;)for(pr<s?(R=pr,pr=0):(R=s,pr-=s),m=U[6]-R*U[5],b=V[6]-R*V[5],z=q+pr*U[5],H=I+pr*V[5],nr=K[4];nr>0;)for(nr<s?(Q=nr,nr=0):(Q=s,nr-=s),h=U[5]-Q*U[4],w=V[5]-Q*V[4],E=z+nr*U[4],G=H+nr*V[4],cr=K[3];cr>0;)for(cr<s?(O=cr,cr=0):(O=s,cr-=s),p=U[4]-O*U[3],x=V[4]-O*V[3],A=E+cr*U[3],F=G+cr*V[3],ir=K[2];ir>0;)for(ir<s?(N=ir,ir=0):(N=s,ir-=s),n=U[3]-N*U[2],j=V[3]-N*V[2],k=A+ir*U[2],D=F+ir*V[2],dr=K[1];dr>0;)for(dr<s?(M=dr,dr=0):(M=s,dr-=s),c=U[2]-M*U[1],l=V[2]-M*V[1],P=k+dr*U[1],C=D+dr*V[1],ar=K[0];ar>0;)for(ar<s?(L=ar,ar=0):(L=s,ar-=s),Y=P+ar*U[0],Z=C+ar*V[0],a=U[1]-L*U[0],u=V[1]-L*V[0],er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++){for(_=0;_<M;_++){for($=0;$<L;$++)t[Z]=f[Y],Y+=e,Z+=v;Y+=a,Z+=u}Y+=c,Z+=l}Y+=n,Z+=j}Y+=p,Z+=x}Y+=h,Z+=w}Y+=m,Z+=b}Y+=y,Z+=g}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr,vr,ur,lr,jr,xr,wr,br;for(O=(br=d(r.shape,r.strides,o.strides)).sh,Z=br.sx,$=br.sy,s=i(r.dtype,o.dtype),_=r.offset,rr=o.offset,f=r.data,t=o.data,e=Z[0],u=$[0],wr=O[8];wr>0;)for(wr<s?(Y=wr,wr=0):(Y=s,wr-=s),F=_+wr*Z[8],N=rr+wr*$[8],xr=O[7];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),v=Z[8]-X*Z[7],k=$[8]-X*$[7],D=F+xr*Z[7],M=N+xr*$[7],jr=O[6];jr>0;)for(jr<s?(W=jr,jr=0):(W=s,jr-=s),y=Z[7]-W*Z[6],P=$[7]-W*$[6],C=D+jr*Z[6],L=M+jr*$[6],lr=O[5];lr>0;)for(lr<s?(V=lr,lr=0):(V=s,lr-=s),m=Z[6]-V*Z[5],g=$[6]-V*$[5],B=C+lr*Z[5],K=L+lr*$[5],ur=O[4];ur>0;)for(ur<s?(U=ur,ur=0):(U=s,ur-=s),h=Z[5]-U*Z[4],b=$[5]-U*$[4],q=B+ur*Z[4],J=K+ur*$[4],vr=O[3];vr>0;)for(vr<s?(T=vr,vr=0):(T=s,vr-=s),p=Z[4]-T*Z[3],w=$[4]-T*$[3],z=q+vr*Z[3],I=J+vr*$[3],yr=O[2];yr>0;)for(yr<s?(S=yr,yr=0):(S=s,yr-=s),n=Z[3]-S*Z[2],x=$[3]-S*$[2],E=z+yr*Z[2],H=I+yr*$[2],mr=O[1];mr>0;)for(mr<s?(R=mr,mr=0):(R=s,mr-=s),c=Z[2]-R*Z[1],j=$[2]-R*$[1],A=E+mr*Z[1],G=H+mr*$[1],hr=O[0];hr>0;)for(hr<s?(Q=hr,hr=0):(Q=s,hr-=s),or=A+hr*Z[0],sr=G+hr*$[0],a=Z[1]-Q*Z[0],l=$[1]-Q*$[0],pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++){for(er=0;er<S;er++){for(tr=0;tr<R;tr++){for(fr=0;fr<Q;fr++)t[sr]=f[or],or+=e,sr+=u;or+=a,sr+=l}or+=c,sr+=j}or+=n,sr+=x}or+=p,sr+=w}or+=h,sr+=b}or+=m,sr+=g}or+=y,sr+=P}or+=v,sr+=k}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr,vr,ur,lr,jr,xr,wr,br,gr,Pr,kr,Ar,Er,zr,qr;for(T=(qr=d(r.shape,r.strides,o.strides)).sh,sr=qr.sx,fr=qr.sy,s=i(r.dtype,o.dtype),tr=r.offset,er=o.offset,f=r.data,t=o.data,e=sr[0],l=fr[0],zr=T[9];zr>0;)for(zr<s?(or=zr,zr=0):(or=s,zr-=s),I=tr+zr*sr[9],S=er+zr*fr[9],Er=T[8];Er>0;)for(Er<s?(rr=Er,Er=0):(rr=s,Er-=s),u=sr[9]-rr*sr[8],E=fr[9]-rr*fr[8],H=I+Er*sr[8],R=S+Er*fr[8],Ar=T[7];Ar>0;)for(Ar<s?(_=Ar,Ar=0):(_=s,Ar-=s),v=sr[8]-_*sr[7],A=fr[8]-_*fr[7],G=H+Ar*sr[7],Q=R+Ar*fr[7],kr=T[6];kr>0;)for(kr<s?($=kr,kr=0):($=s,kr-=s),y=sr[7]-$*sr[6],k=fr[7]-$*fr[6],F=G+kr*sr[6],O=Q+kr*fr[6],Pr=T[5];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),m=sr[6]-Z*sr[5],P=fr[6]-Z*fr[5],D=F+Pr*sr[5],N=O+Pr*fr[5],gr=T[4];gr>0;)for(gr<s?(Y=gr,gr=0):(Y=s,gr-=s),h=sr[5]-Y*sr[4],g=fr[5]-Y*fr[4],C=D+gr*sr[4],M=N+gr*fr[4],br=T[3];br>0;)for(br<s?(X=br,br=0):(X=s,br-=s),p=sr[4]-X*sr[3],b=fr[4]-X*fr[3],B=C+br*sr[3],L=M+br*fr[3],wr=T[2];wr>0;)for(wr<s?(W=wr,wr=0):(W=s,wr-=s),n=sr[3]-W*sr[2],w=fr[3]-W*fr[2],q=B+wr*sr[2],K=L+wr*fr[2],xr=T[1];xr>0;)for(xr<s?(V=xr,xr=0):(V=s,xr-=s),c=sr[2]-V*sr[1],x=fr[2]-V*fr[1],z=q+xr*sr[1],J=K+xr*fr[1],jr=T[0];jr>0;)for(jr<s?(U=jr,jr=0):(U=s,jr-=s),ar=z+jr*sr[0],dr=J+jr*fr[0],a=sr[1]-U*sr[0],j=fr[1]-U*fr[0],lr=0;lr<or;lr++){for(ur=0;ur<rr;ur++){for(vr=0;vr<_;vr++){for(yr=0;yr<$;yr++){for(mr=0;mr<Z;mr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(nr=0;nr<W;nr++){for(cr=0;cr<V;cr++){for(ir=0;ir<U;ir++)t[dr]=f[ar],ar+=e,dr+=l;ar+=a,dr+=j}ar+=c,dr+=x}ar+=n,dr+=w}ar+=p,dr+=b}ar+=h,dr+=g}ar+=m,dr+=P}ar+=y,dr+=k}ar+=v,dr+=A}ar+=u,dr+=E}}],y=[function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q;for(v=(q=d(r.shape,r.strides,o.strides)).sh,j=q.sx,x=q.sy,s=i(r.dtype,o.dtype),w=r.offset,b=o.offset,f=r.data,t=o.data,c=j[0],p=x[0],e=r.accessors[0],a=o.accessors[1],z=v[1];z>0;)for(z<s?(l=z,z=0):(l=s,z-=s),m=w+z*j[1],y=b+z*x[1],E=v[0];E>0;)for(E<s?(u=E,E=0):(u=s,E-=s),g=m+E*j[0],P=y+E*x[0],n=j[1]-u*j[0],h=x[1]-u*x[0],A=0;A<l;A++){for(k=0;k<u;k++)a(t,P,e(f,g)),g+=c,P+=p;g+=n,P+=h}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I;for(x=(I=d(r.shape,r.strides,o.strides)).sh,P=I.sx,k=I.sy,s=i(r.dtype,o.dtype),A=r.offset,E=o.offset,f=r.data,t=o.data,c=P[0],h=k[0],e=r.accessors[0],a=o.accessors[1],H=x[2];H>0;)for(H<s?(g=H,H=0):(g=s,H-=s),u=A+H*P[2],j=E+H*k[2],G=x[1];G>0;)for(G<s?(b=G,G=0):(b=s,G-=s),p=P[2]-b*P[1],y=k[2]-b*k[1],v=u+G*P[1],l=j+G*k[1],F=x[0];F>0;)for(F<s?(w=F,F=0):(w=s,F-=s),z=v+F*P[0],q=l+F*k[0],n=P[1]-w*P[0],m=k[1]-w*k[0],D=0;D<g;D++){for(C=0;C<b;C++){for(B=0;B<w;B++)a(t,q,e(f,z)),z+=c,q+=h;z+=n,q+=m}z+=p,q+=y}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q;for(P=(Q=d(r.shape,r.strides,o.strides)).sh,q=Q.sx,B=Q.sy,s=i(r.dtype,o.dtype),C=r.offset,D=o.offset,f=r.data,t=o.data,c=q[0],m=B[0],e=r.accessors[0],a=o.accessors[1],O=P[3];O>0;)for(O<s?(z=O,O=0):(z=s,O-=s),x=C+O*q[3],g=D+O*B[3],N=P[2];N>0;)for(N<s?(E=N,N=0):(E=s,N-=s),h=q[3]-E*q[2],u=B[3]-E*B[2],j=x+N*q[2],b=g+N*B[2],M=P[1];M>0;)for(M<s?(A=M,M=0):(A=s,M-=s),p=q[2]-A*q[1],v=B[2]-A*B[1],l=j+M*q[1],w=b+M*B[1],L=P[0];L>0;)for(L<s?(k=L,L=0):(k=s,L-=s),F=l+L*q[0],G=w+L*B[0],n=q[1]-k*q[0],y=B[1]-k*B[0],K=0;K<z;K++){for(J=0;J<E;J++){for(I=0;I<A;I++){for(H=0;H<k;H++)a(t,G,e(f,F)),F+=c,G+=m;F+=n,G+=y}F+=p,G+=v}F+=h,G+=u}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X;for(z=(X=d(r.shape,r.strides,o.strides)).sh,G=X.sx,H=X.sy,s=i(r.dtype,o.dtype),I=r.offset,J=o.offset,f=r.data,t=o.data,c=G[0],y=H[0],e=r.accessors[0],a=o.accessors[1],W=z[4];W>0;)for(W<s?(F=W,W=0):(F=s,W-=s),g=I+W*G[4],E=J+W*H[4],V=z[3];V>0;)for(V<s?(D=V,V=0):(D=s,V-=s),m=G[4]-D*G[3],j=H[4]-D*H[3],b=g+V*G[3],A=E+V*H[3],U=z[2];U>0;)for(U<s?(C=U,U=0):(C=s,U-=s),h=G[3]-C*G[2],l=H[3]-C*H[2],w=b+U*G[2],k=A+U*H[2],T=z[1];T>0;)for(T<s?(B=T,T=0):(B=s,T-=s),p=G[2]-B*G[1],u=H[2]-B*H[1],x=w+T*G[1],P=k+T*H[1],S=z[0];S>0;)for(S<s?(q=S,S=0):(q=s,S-=s),K=x+S*G[0],L=P+S*H[0],n=G[1]-q*G[0],v=H[1]-q*H[0],R=0;R<F;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<q;M++)a(t,L,e(f,K)),K+=c,L+=y;K+=n,L+=v}K+=p,L+=u}K+=h,L+=l}K+=m,L+=j}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr;for(D=(sr=d(r.shape,r.strides,o.strides)).sh,L=sr.sx,M=sr.sy,s=i(r.dtype,o.dtype),N=r.offset,O=o.offset,f=r.data,t=o.data,c=L[0],v=M[0],e=r.accessors[0],a=o.accessors[1],or=D[5];or>0;)for(or<s?(K=or,or=0):(K=s,or-=s),A=N+or*L[5],C=O+or*M[5],rr=D[4];rr>0;)for(rr<s?(J=rr,rr=0):(J=s,rr-=s),y=L[5]-J*L[4],w=M[5]-J*M[4],k=A+rr*L[4],B=C+rr*M[4],_=D[3];_>0;)for(_<s?(I=_,_=0):(I=s,_-=s),m=L[4]-I*L[3],x=M[4]-I*M[3],P=k+_*L[3],q=B+_*M[3],$=D[2];$>0;)for($<s?(H=$,$=0):(H=s,$-=s),h=L[3]-H*L[2],j=M[3]-H*M[2],g=P+$*L[2],z=q+$*M[2],Z=D[1];Z>0;)for(Z<s?(G=Z,Z=0):(G=s,Z-=s),p=L[2]-G*L[1],l=M[2]-G*M[1],b=g+Z*L[1],E=z+Z*M[1],Y=D[0];Y>0;)for(Y<s?(F=Y,Y=0):(F=s,Y-=s),Q=b+Y*L[0],R=E+Y*M[0],n=L[1]-F*L[0],u=M[1]-F*M[0],X=0;X<K;X++){for(W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++)a(t,R,e(f,Q)),Q+=c,R+=v;Q+=n,R+=u}Q+=p,R+=l}Q+=h,R+=j}Q+=m,R+=x}Q+=y,R+=w}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr;for(I=(cr=d(r.shape,r.strides,o.strides)).sh,R=cr.sx,S=cr.sy,s=i(r.dtype,o.dtype),T=r.offset,U=o.offset,f=r.data,t=o.data,c=R[0],u=S[0],e=r.accessors[0],a=o.accessors[1],ir=I[6];ir>0;)for(ir<s?(Q=ir,ir=0):(Q=s,ir-=s),q=T+ir*R[6],H=U+ir*S[6],dr=I[5];dr>0;)for(dr<s?(O=dr,dr=0):(O=s,dr-=s),v=R[6]-O*R[5],g=S[6]-O*S[5],z=q+dr*R[5],G=H+dr*S[5],ar=I[4];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),y=R[5]-N*R[4],b=S[5]-N*S[4],E=z+ar*R[4],F=G+ar*S[4],er=I[3];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),m=R[4]-M*R[3],w=S[4]-M*S[3],A=E+er*R[3],D=F+er*S[3],tr=I[2];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),h=R[3]-L*R[2],x=S[3]-L*S[2],k=A+tr*R[2],C=D+tr*S[2],fr=I[1];fr>0;)for(fr<s?(K=fr,fr=0):(K=s,fr-=s),p=R[2]-K*R[1],j=S[2]-K*S[1],P=k+fr*R[1],B=C+fr*S[1],sr=I[0];sr>0;)for(sr<s?(J=sr,sr=0):(J=s,sr-=s),V=P+sr*R[0],W=B+sr*S[0],n=R[1]-J*R[0],l=S[1]-J*S[0],or=0;or<Q;or++){for(rr=0;rr<O;rr++){for(_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++)a(t,W,e(f,V)),V+=c,W+=u;V+=n,W+=l}V+=p,W+=j}V+=h,W+=x}V+=m,W+=w}V+=y,W+=b}V+=v,W+=g}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr,vr,ur;for(M=(ur=d(r.shape,r.strides,o.strides)).sh,W=ur.sx,X=ur.sy,s=i(r.dtype,o.dtype),Y=r.offset,Z=o.offset,f=r.data,t=o.data,c=W[0],l=X[0],e=r.accessors[0],a=o.accessors[1],vr=M[7];vr>0;)for(vr<s?(V=vr,vr=0):(V=s,vr-=s),D=Y+vr*W[7],L=Z+vr*X[7],yr=M[6];yr>0;)for(yr<s?(U=yr,yr=0):(U=s,yr-=s),u=W[7]-U*W[6],k=X[7]-U*X[6],C=D+yr*W[6],K=L+yr*X[6],mr=M[5];mr>0;)for(mr<s?(T=mr,mr=0):(T=s,mr-=s),v=W[6]-T*W[5],P=X[6]-T*X[5],B=C+mr*W[5],J=K+mr*X[5],hr=M[4];hr>0;)for(hr<s?(S=hr,hr=0):(S=s,hr-=s),y=W[5]-S*W[4],g=X[5]-S*X[4],q=B+hr*W[4],I=J+hr*X[4],pr=M[3];pr>0;)for(pr<s?(R=pr,pr=0):(R=s,pr-=s),m=W[4]-R*W[3],b=X[4]-R*X[3],z=q+pr*W[3],H=I+pr*X[3],nr=M[2];nr>0;)for(nr<s?(Q=nr,nr=0):(Q=s,nr-=s),h=W[3]-Q*W[2],w=X[3]-Q*X[2],E=z+nr*W[2],G=H+nr*X[2],cr=M[1];cr>0;)for(cr<s?(O=cr,cr=0):(O=s,cr-=s),p=W[2]-O*W[1],x=X[2]-O*X[1],A=E+cr*W[1],F=G+cr*X[1],ir=M[0];ir>0;)for(ir<s?(N=ir,ir=0):(N=s,ir-=s),$=A+ir*W[0],_=F+ir*X[0],n=W[1]-N*W[0],j=X[1]-N*X[0],dr=0;dr<V;dr++){for(ar=0;ar<U;ar++){for(er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++)a(t,_,e(f,$)),$+=c,_+=l;$+=n,_+=j}$+=p,_+=x}$+=h,_+=w}$+=m,_+=b}$+=y,_+=g}$+=v,_+=P}$+=u,_+=k}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr,vr,ur,lr,jr,xr,wr,br,gr,Pr;for(R=(Pr=d(r.shape,r.strides,o.strides)).sh,_=Pr.sx,rr=Pr.sy,s=i(r.dtype,o.dtype),or=r.offset,sr=o.offset,f=r.data,t=o.data,c=_[0],j=rr[0],e=r.accessors[0],a=o.accessors[1],gr=R[8];gr>0;)for(gr<s?($=gr,gr=0):($=s,gr-=s),H=or+gr*_[8],Q=sr+gr*rr[8],br=R[7];br>0;)for(br<s?(Z=br,br=0):(Z=s,br-=s),l=_[8]-Z*_[7],E=rr[8]-Z*rr[7],G=H+br*_[7],O=Q+br*rr[7],wr=R[6];wr>0;)for(wr<s?(Y=wr,wr=0):(Y=s,wr-=s),u=_[7]-Y*_[6],A=rr[7]-Y*rr[6],F=G+wr*_[6],N=O+wr*rr[6],xr=R[5];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),v=_[6]-X*_[5],k=rr[6]-X*rr[5],D=F+xr*_[5],M=N+xr*rr[5],jr=R[4];jr>0;)for(jr<s?(W=jr,jr=0):(W=s,jr-=s),y=_[5]-W*_[4],P=rr[5]-W*rr[4],C=D+jr*_[4],L=M+jr*rr[4],lr=R[3];lr>0;)for(lr<s?(V=lr,lr=0):(V=s,lr-=s),m=_[4]-V*_[3],g=rr[4]-V*rr[3],B=C+lr*_[3],K=L+lr*rr[3],ur=R[2];ur>0;)for(ur<s?(U=ur,ur=0):(U=s,ur-=s),h=_[3]-U*_[2],b=rr[3]-U*rr[2],q=B+ur*_[2],J=K+ur*rr[2],vr=R[1];vr>0;)for(vr<s?(T=vr,vr=0):(T=s,vr-=s),p=_[2]-T*_[1],w=rr[2]-T*rr[1],z=q+vr*_[1],I=J+vr*rr[1],yr=R[0];yr>0;)for(yr<s?(S=yr,yr=0):(S=s,yr-=s),fr=z+yr*_[0],tr=I+yr*rr[0],n=_[1]-S*_[0],x=rr[1]-S*rr[0],mr=0;mr<$;mr++){for(hr=0;hr<Z;hr++){for(pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++){for(er=0;er<S;er++)a(t,tr,e(f,fr)),fr+=c,tr+=j;fr+=n,tr+=x}fr+=p,tr+=w}fr+=h,tr+=b}fr+=m,tr+=g}fr+=y,tr+=P}fr+=v,tr+=k}fr+=u,tr+=A}fr+=l,tr+=E}},function(r,o){var s,f,t,e,a,c,n,p,h,m,y,v,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,yr,vr,ur,lr,jr,xr,wr,br,gr,Pr,kr,Ar,Er,zr,qr,Br,Cr;for(V=(Cr=d(r.shape,r.strides,o.strides)).sh,tr=Cr.sx,er=Cr.sy,s=i(r.dtype,o.dtype),ar=r.offset,dr=o.offset,f=r.data,t=o.data,c=tr[0],x=er[0],e=r.accessors[0],a=o.accessors[1],Br=V[9];Br>0;)for(Br<s?(fr=Br,Br=0):(fr=s,Br-=s),K=ar+Br*tr[9],U=dr+Br*er[9],qr=V[8];qr>0;)for(qr<s?(sr=qr,qr=0):(sr=s,qr-=s),j=tr[9]-sr*tr[8],q=er[9]-sr*er[8],J=K+qr*tr[8],T=U+qr*er[8],zr=V[7];zr>0;)for(zr<s?(or=zr,zr=0):(or=s,zr-=s),l=tr[8]-or*tr[7],z=er[8]-or*er[7],I=J+zr*tr[7],S=T+zr*er[7],Er=V[6];Er>0;)for(Er<s?(rr=Er,Er=0):(rr=s,Er-=s),u=tr[7]-rr*tr[6],E=er[7]-rr*er[6],H=I+Er*tr[6],R=S+Er*er[6],Ar=V[5];Ar>0;)for(Ar<s?(_=Ar,Ar=0):(_=s,Ar-=s),v=tr[6]-_*tr[5],A=er[6]-_*er[5],G=H+Ar*tr[5],Q=R+Ar*er[5],kr=V[4];kr>0;)for(kr<s?($=kr,kr=0):($=s,kr-=s),y=tr[5]-$*tr[4],k=er[5]-$*er[4],F=G+kr*tr[4],O=Q+kr*er[4],Pr=V[3];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),m=tr[4]-Z*tr[3],P=er[4]-Z*er[3],D=F+Pr*tr[3],N=O+Pr*er[3],gr=V[2];gr>0;)for(gr<s?(Y=gr,gr=0):(Y=s,gr-=s),h=tr[3]-Y*tr[2],g=er[3]-Y*er[2],C=D+gr*tr[2],M=N+gr*er[2],br=V[1];br>0;)for(br<s?(X=br,br=0):(X=s,br-=s),p=tr[2]-X*tr[1],b=er[2]-X*er[1],B=C+br*tr[1],L=M+br*er[1],wr=V[0];wr>0;)for(wr<s?(W=wr,wr=0):(W=s,wr-=s),ir=B+wr*tr[0],cr=L+wr*er[0],n=tr[1]-W*tr[0],w=er[1]-W*er[0],xr=0;xr<fr;xr++){for(jr=0;jr<sr;jr++){for(lr=0;lr<or;lr++){for(ur=0;ur<rr;ur++){for(vr=0;vr<_;vr++){for(yr=0;yr<$;yr++){for(mr=0;mr<Z;mr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(nr=0;nr<W;nr++)a(t,cr,e(f,ir)),ir+=c,cr+=x;ir+=n,cr+=w}ir+=p,cr+=b}ir+=h,cr+=g}ir+=m,cr+=P}ir+=y,cr+=k}ir+=v,cr+=A}ir+=u,cr+=E}ir+=l,cr+=z}ir+=j,cr+=q}}],v=p.length-1;function u(d){var i,u,l,j,x,w,b,g,P,k,A,E,z,q,B,C,D;if(q=a(d[0]),B=a(d[1]),o(q.dtype)&&r(B.dtype)&&(q.accessorProtocol=!0,q.accessors[0]=f(q.accessors[0],2,t(B.dtype))),j=q.shape,x=B.shape,(i=j.length)!==x.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+i+". ndims(y) == "+x.length+".");if(0===i)return q.accessorProtocol||B.accessorProtocol?h[i](q,B):p[i](q,B);for(g=1,z=0,D=0;D<i;D++){if((C=j[D])!==x[D])throw new Error("invalid arguments. Arrays must have the same shape.");g*=C,1===C&&(z+=1)}if(0!==g){if(1===i)return q.accessorProtocol||B.accessorProtocol?h[i](q,B):p[i](q,B);if(P=q.strides,k=B.strides,z===i-1){for(D=0;D<i&&1===j[D];D++);return q.shape=[j[D]],B.shape=q.shape,q.strides=[P[D]],B.strides=[k[D]],q.accessorProtocol||B.accessorProtocol?h[1](q,B):p[1](q,B)}if(w=s(P),b=s(k),0!==w&&0!==b&&q.order===B.order){if(u=e(j,P,q.offset),l=e(x,k,B.offset),g===u[1]-u[0]+1&&g===l[1]-l[0]+1)return A=1===w?u[0]:u[1],E=1===b?l[0]:l[1],q.shape=[g],B.shape=q.shape,q.strides=[w],B.strides=[b],q.offset=A,B.offset=E,q.accessorProtocol||B.accessorProtocol?h[1](q,B):p[1](q,B);if(i<=v)return q.accessorProtocol||B.accessorProtocol?h[i](q,B):p[i](q,B)}return i<=v?q.accessorProtocol||B.accessorProtocol?y[i-2](q,B):m[i-2](q,B):q.accessorProtocol||B.accessorProtocol?function(r,o){var s,f,t,e,a,d,i,p,h,m,y,v,u,l;for(p=r.shape,a=c(p),s=r.data,f=o.data,h=r.strides,m=o.strides,y=r.offset,v=o.offset,t=r.order,e=o.order,d=r.accessors[0],i=o.accessors[1],l=0;l<a;l++)u=n(p,h,y,t,l,"throw"),i(f,n(p,m,v,e,l,"throw"),d(s,u))}(q,B):void function(r,o){var s,f,t,e,a,d,i,p,h,m,y,v;for(d=r.shape,a=c(d),s=r.data,f=o.data,i=r.strides,p=o.strides,h=r.offset,m=o.offset,t=r.order,e=o.order,v=0;v<a;v++)y=n(d,i,h,t,v,"throw"),f[n(d,p,m,e,v,"throw")]=s[y]}(q,B)}}export{u as default};
//# sourceMappingURL=index.mjs.map
