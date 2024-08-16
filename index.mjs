// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-complex-floating-point-data-type@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-real-data-type@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-ctors@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.2-esm/index.mjs";var h="throw";var m="throw";var v=[function(r,o){o.data[o.offset]=r.data[r.offset]},function(r,o){var s,f,t,e,a,d,i,c;for(a=r.shape[0],t=r.strides[0],e=o.strides[0],d=r.offset,i=o.offset,s=r.data,f=o.data,c=0;c<a;c++)f[i]=s[d],d+=t,i+=e},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u;for(i=r.shape,p=r.strides,h=o.strides,"row-major"===r.order?(c=i[1],n=i[0],t=p[1],e=p[0]-c*p[1],a=h[1],d=h[0]-c*h[1]):(c=i[0],n=i[1],t=p[0],e=p[1]-c*p[0],a=h[0],d=h[1]-c*h[0]),m=r.offset,v=o.offset,s=r.data,f=o.data,u=0;u<n;u++){for(y=0;y<c;y++)f[v]=s[m],m+=t,v+=a;m+=e,v+=d}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b;for(n=r.shape,v=r.strides,y=o.strides,"row-major"===r.order?(p=n[2],h=n[1],m=n[0],t=v[2],e=v[1]-p*v[2],a=v[0]-h*v[1],d=y[2],i=y[1]-p*y[2],c=y[0]-h*y[1]):(p=n[0],h=n[1],m=n[2],t=v[0],e=v[1]-p*v[0],a=v[2]-h*v[1],d=y[0],i=y[1]-p*y[0],c=y[2]-h*y[1]),u=r.offset,l=o.offset,s=r.data,f=o.data,b=0;b<m;b++){for(x=0;x<h;x++){for(j=0;j<p;j++)f[l]=s[u],u+=t,l+=d;u+=e,l+=i}u+=a,l+=c}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k;for(h=r.shape,l=r.strides,j=o.strides,"row-major"===r.order?(m=h[3],v=h[2],y=h[1],u=h[0],t=l[3],e=l[2]-m*l[3],a=l[1]-v*l[2],d=l[0]-y*l[1],i=j[3],c=j[2]-m*j[3],n=j[1]-v*j[2],p=j[0]-y*j[1]):(m=h[0],v=h[1],y=h[2],u=h[3],t=l[0],e=l[1]-m*l[0],a=l[2]-v*l[1],d=l[3]-y*l[2],i=j[0],c=j[1]-m*j[0],n=j[2]-v*j[1],p=j[3]-y*j[2]),x=r.offset,b=o.offset,s=r.data,f=o.data,k=0;k<u;k++){for(P=0;P<y;P++){for(g=0;g<v;g++){for(w=0;w<m;w++)f[b]=s[x],x+=t,b+=i;x+=e,b+=c}x+=a,b+=n}x+=d,b+=p}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H;for(v=r.shape,b=r.strides,w=o.strides,"row-major"===r.order?(y=v[4],u=v[3],l=v[2],j=v[1],x=v[0],t=b[4],e=b[3]-y*b[4],a=b[2]-u*b[3],d=b[1]-l*b[2],i=b[0]-j*b[1],c=w[4],n=w[3]-y*w[4],p=w[2]-u*w[3],h=w[1]-l*w[2],m=w[0]-j*w[1]):(y=v[0],u=v[1],l=v[2],j=v[3],x=v[4],t=b[0],e=b[1]-y*b[0],a=b[2]-u*b[1],d=b[3]-l*b[2],i=b[4]-j*b[3],c=w[0],n=w[1]-y*w[0],p=w[2]-u*w[1],h=w[3]-l*w[2],m=w[4]-j*w[3]),g=r.offset,P=o.offset,s=r.data,f=o.data,H=0;H<x;H++){for(A=0;A<j;A++){for(z=0;z<l;z++){for(E=0;E<u;E++){for(k=0;k<y;k++)f[P]=s[g],g+=t,P+=c;g+=e,P+=n}g+=a,P+=p}g+=d,P+=h}g+=i,P+=m}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D;for(u=r.shape,P=r.strides,k=o.strides,"row-major"===r.order?(l=u[5],j=u[4],x=u[3],b=u[2],w=u[1],g=u[0],t=P[5],e=P[4]-l*P[5],a=P[3]-j*P[4],d=P[2]-x*P[3],i=P[1]-b*P[2],c=P[0]-w*P[1],n=k[5],p=k[4]-l*k[5],h=k[3]-j*k[4],m=k[2]-x*k[3],v=k[1]-b*k[2],y=k[0]-w*k[1]):(l=u[0],j=u[1],x=u[2],b=u[3],w=u[4],g=u[5],t=P[0],e=P[1]-l*P[0],a=P[2]-j*P[1],d=P[3]-x*P[2],i=P[4]-b*P[3],c=P[5]-w*P[4],n=k[0],p=k[1]-l*k[0],h=k[2]-j*k[1],m=k[3]-x*k[2],v=k[4]-b*k[3],y=k[5]-w*k[4]),E=r.offset,z=o.offset,s=r.data,f=o.data,D=0;D<g;D++){for(C=0;C<w;C++){for(B=0;B<b;B++){for(q=0;q<x;q++){for(H=0;H<j;H++){for(A=0;A<l;A++)f[z]=s[E],E+=t,z+=n;E+=e,z+=p}E+=a,z+=h}E+=d,z+=m}E+=i,z+=v}E+=c,z+=y}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J;for(j=r.shape,z=r.strides,A=o.strides,"row-major"===r.order?(x=j[6],b=j[5],w=j[4],g=j[3],P=j[2],k=j[1],E=j[0],t=z[6],e=z[5]-x*z[6],a=z[4]-b*z[5],d=z[3]-w*z[4],i=z[2]-g*z[3],c=z[1]-P*z[2],n=z[0]-k*z[1],p=A[6],h=A[5]-x*A[6],m=A[4]-b*A[5],v=A[3]-w*A[4],y=A[2]-g*A[3],u=A[1]-P*A[2],l=A[0]-k*A[1]):(x=j[0],b=j[1],w=j[2],g=j[3],P=j[4],k=j[5],E=j[6],t=z[0],e=z[1]-x*z[0],a=z[2]-b*z[1],d=z[3]-w*z[2],i=z[4]-g*z[3],c=z[5]-P*z[4],n=z[6]-k*z[5],p=A[0],h=A[1]-x*A[0],m=A[2]-b*A[1],v=A[3]-w*A[2],y=A[4]-g*A[3],u=A[5]-P*A[4],l=A[6]-k*A[5]),H=r.offset,q=o.offset,s=r.data,f=o.data,J=0;J<E;J++){for(I=0;I<k;I++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(D=0;D<w;D++){for(C=0;C<b;C++){for(B=0;B<x;B++)f[q]=s[H],H+=t,q+=p;H+=e,q+=h}H+=a,q+=m}H+=d,q+=v}H+=i,q+=y}H+=c,q+=u}H+=n,q+=l}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N;for(b=r.shape,q=r.strides,B=o.strides,"row-major"===r.order?(w=b[7],g=b[6],P=b[5],k=b[4],E=b[3],z=b[2],A=b[1],H=b[0],t=q[7],e=q[6]-w*q[7],a=q[5]-g*q[6],d=q[4]-P*q[5],i=q[3]-k*q[4],c=q[2]-E*q[3],n=q[1]-z*q[2],p=q[0]-A*q[1],h=B[7],m=B[6]-w*B[7],v=B[5]-g*B[6],y=B[4]-P*B[5],u=B[3]-k*B[4],l=B[2]-E*B[3],j=B[1]-z*B[2],x=B[0]-A*B[1]):(w=b[0],g=b[1],P=b[2],k=b[3],E=b[4],z=b[5],A=b[6],H=b[7],t=q[0],e=q[1]-w*q[0],a=q[2]-g*q[1],d=q[3]-P*q[2],i=q[4]-k*q[3],c=q[5]-E*q[4],n=q[6]-z*q[5],p=q[7]-A*q[6],h=B[0],m=B[1]-w*B[0],v=B[2]-g*B[1],y=B[3]-P*B[2],u=B[4]-k*B[3],l=B[5]-E*B[4],j=B[6]-z*B[5],x=B[7]-A*B[6]),C=r.offset,D=o.offset,s=r.data,f=o.data,N=0;N<H;N++){for(M=0;M<A;M++){for(L=0;L<z;L++){for(K=0;K<E;K++){for(J=0;J<k;J++){for(I=0;I<P;I++){for(G=0;G<g;G++){for(F=0;F<w;F++)f[D]=s[C],C+=t,D+=h;C+=e,D+=m}C+=a,D+=v}C+=d,D+=y}C+=i,D+=u}C+=c,D+=l}C+=n,D+=j}C+=p,D+=x}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S;for(g=r.shape,D=r.strides,F=o.strides,"row-major"===r.order?(P=g[8],k=g[7],E=g[6],z=g[5],A=g[4],H=g[3],q=g[2],B=g[1],C=g[0],t=D[8],e=D[7]-P*D[8],a=D[6]-k*D[7],d=D[5]-E*D[6],i=D[4]-z*D[5],c=D[3]-A*D[4],n=D[2]-H*D[3],p=D[1]-q*D[2],h=D[0]-B*D[1],m=F[8],v=F[7]-P*F[8],y=F[6]-k*F[7],u=F[5]-E*F[6],l=F[4]-z*F[5],j=F[3]-A*F[4],x=F[2]-H*F[3],b=F[1]-q*F[2],w=F[0]-B*F[1]):(P=g[0],k=g[1],E=g[2],z=g[3],A=g[4],H=g[5],q=g[6],B=g[7],C=g[8],t=D[0],e=D[1]-P*D[0],a=D[2]-k*D[1],d=D[3]-E*D[2],i=D[4]-z*D[3],c=D[5]-A*D[4],n=D[6]-H*D[5],p=D[7]-q*D[6],h=D[8]-B*D[7],m=F[0],v=F[1]-P*F[0],y=F[2]-k*F[1],u=F[3]-E*F[2],l=F[4]-z*F[3],j=F[5]-A*F[4],x=F[6]-H*F[5],b=F[7]-q*F[6],w=F[8]-B*F[7]),G=r.offset,I=o.offset,s=r.data,f=o.data,S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<H;O++){for(N=0;N<A;N++){for(M=0;M<z;M++){for(L=0;L<E;L++){for(K=0;K<k;K++){for(J=0;J<P;J++)f[I]=s[G],G+=t,I+=m;G+=e,I+=v}G+=a,I+=y}G+=d,I+=u}G+=i,I+=l}G+=c,I+=j}G+=n,I+=x}G+=p,I+=b}G+=h,I+=w}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W;for(k=r.shape,I=r.strides,J=o.strides,"row-major"===r.order?(E=k[9],z=k[8],A=k[7],H=k[6],q=k[5],B=k[4],C=k[3],D=k[2],F=k[1],G=k[0],t=I[9],e=I[8]-E*I[9],a=I[7]-z*I[8],d=I[6]-A*I[7],i=I[5]-H*I[6],c=I[4]-q*I[5],n=I[3]-B*I[4],p=I[2]-C*I[3],h=I[1]-D*I[2],m=I[0]-F*I[1],v=J[9],y=J[8]-E*J[9],u=J[7]-z*J[8],l=J[6]-A*J[7],j=J[5]-H*J[6],x=J[4]-q*J[5],b=J[3]-B*J[4],w=J[2]-C*J[3],g=J[1]-D*J[2],P=J[0]-F*J[1]):(E=k[0],z=k[1],A=k[2],H=k[3],q=k[4],B=k[5],C=k[6],D=k[7],F=k[8],G=k[9],t=I[0],e=I[1]-E*I[0],a=I[2]-z*I[1],d=I[3]-A*I[2],i=I[4]-H*I[3],c=I[5]-q*I[4],n=I[6]-B*I[5],p=I[7]-C*I[6],h=I[8]-D*I[7],m=I[9]-F*I[8],v=J[0],y=J[1]-E*J[0],u=J[2]-z*J[1],l=J[3]-A*J[2],j=J[4]-H*J[3],x=J[5]-q*J[4],b=J[6]-B*J[5],w=J[7]-C*J[6],g=J[8]-D*J[7],P=J[9]-F*J[8]),K=r.offset,L=o.offset,s=r.data,f=o.data,W=0;W<G;W++){for(V=0;V<F;V++){for(U=0;U<D;U++){for(T=0;T<C;T++){for(S=0;S<B;S++){for(R=0;R<q;R++){for(Q=0;Q<H;Q++){for(O=0;O<A;O++){for(N=0;N<z;N++){for(M=0;M<E;M++)f[L]=s[K],K+=t,L+=v;K+=e,L+=y}K+=a,L+=u}K+=d,L+=l}K+=i,L+=j}K+=c,L+=x}K+=n,L+=b}K+=p,L+=w}K+=h,L+=g}K+=m,L+=P}}],y=[function(r,o){o.accessors[1](o.data,o.offset,r.accessors[0](r.data,r.offset))},function(r,o){var s,f,t,e,a,d,i,c,n,p;for(i=r.shape[0],a=r.strides[0],d=o.strides[0],c=r.offset,n=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],p=0;p<i;p++)e(f,n,t(s,c)),c+=a,n+=d},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j;for(n=r.shape,m=r.strides,v=o.strides,"row-major"===r.order?(p=n[1],h=n[0],a=m[1],d=m[0]-p*m[1],i=v[1],c=v[0]-p*v[1]):(p=n[0],h=n[1],a=m[0],d=m[1]-p*m[0],i=v[0],c=v[1]-p*v[0]),y=r.offset,u=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],j=0;j<h;j++){for(l=0;l<p;l++)e(f,u,t(s,y)),y+=a,u+=i;y+=d,u+=c}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g;for(h=r.shape,u=r.strides,l=o.strides,"row-major"===r.order?(m=h[2],v=h[1],y=h[0],a=u[2],d=u[1]-m*u[2],i=u[0]-v*u[1],c=l[2],n=l[1]-m*l[2],p=l[0]-v*l[1]):(m=h[0],v=h[1],y=h[2],a=u[0],d=u[1]-m*u[0],i=u[2]-v*u[1],c=l[0],n=l[1]-m*l[0],p=l[2]-v*l[1]),j=r.offset,x=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],g=0;g<y;g++){for(w=0;w<v;w++){for(b=0;b<m;b++)e(f,x,t(s,j)),j+=a,x+=c;j+=d,x+=n}j+=i,x+=p}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z;for(v=r.shape,x=r.strides,b=o.strides,"row-major"===r.order?(y=v[3],u=v[2],l=v[1],j=v[0],a=x[3],d=x[2]-y*x[3],i=x[1]-u*x[2],c=x[0]-l*x[1],n=b[3],p=b[2]-y*b[3],h=b[1]-u*b[2],m=b[0]-l*b[1]):(y=v[0],u=v[1],l=v[2],j=v[3],a=x[0],d=x[1]-y*x[0],i=x[2]-u*x[1],c=x[3]-l*x[2],n=b[0],p=b[1]-y*b[0],h=b[2]-u*b[1],m=b[3]-l*b[2]),w=r.offset,g=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],z=0;z<j;z++){for(E=0;E<l;E++){for(k=0;k<u;k++){for(P=0;P<y;P++)e(f,g,t(s,w)),w+=a,g+=n;w+=d,g+=p}w+=i,g+=h}w+=c,g+=m}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B;for(u=r.shape,g=r.strides,P=o.strides,"row-major"===r.order?(l=u[4],j=u[3],x=u[2],b=u[1],w=u[0],a=g[4],d=g[3]-l*g[4],i=g[2]-j*g[3],c=g[1]-x*g[2],n=g[0]-b*g[1],p=P[4],h=P[3]-l*P[4],m=P[2]-j*P[3],v=P[1]-x*P[2],y=P[0]-b*P[1]):(l=u[0],j=u[1],x=u[2],b=u[3],w=u[4],a=g[0],d=g[1]-l*g[0],i=g[2]-j*g[1],c=g[3]-x*g[2],n=g[4]-b*g[3],p=P[0],h=P[1]-l*P[0],m=P[2]-j*P[1],v=P[3]-x*P[2],y=P[4]-b*P[3]),k=r.offset,E=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],B=0;B<w;B++){for(q=0;q<b;q++){for(H=0;H<x;H++){for(A=0;A<j;A++){for(z=0;z<l;z++)e(f,E,t(s,k)),k+=a,E+=p;k+=d,E+=h}k+=i,E+=m}k+=c,E+=v}k+=n,E+=y}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G;for(j=r.shape,E=r.strides,z=o.strides,"row-major"===r.order?(x=j[5],b=j[4],w=j[3],g=j[2],P=j[1],k=j[0],a=E[5],d=E[4]-x*E[5],i=E[3]-b*E[4],c=E[2]-w*E[3],n=E[1]-g*E[2],p=E[0]-P*E[1],h=z[5],m=z[4]-x*z[5],v=z[3]-b*z[4],y=z[2]-w*z[3],u=z[1]-g*z[2],l=z[0]-P*z[1]):(x=j[0],b=j[1],w=j[2],g=j[3],P=j[4],k=j[5],a=E[0],d=E[1]-x*E[0],i=E[2]-b*E[1],c=E[3]-w*E[2],n=E[4]-g*E[3],p=E[5]-P*E[4],h=z[0],m=z[1]-x*z[0],v=z[2]-b*z[1],y=z[3]-w*z[2],u=z[4]-g*z[3],l=z[5]-P*z[4]),A=r.offset,H=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],G=0;G<k;G++){for(F=0;F<P;F++){for(D=0;D<g;D++){for(C=0;C<w;C++){for(B=0;B<b;B++){for(q=0;q<x;q++)e(f,H,t(s,A)),A+=a,H+=h;A+=d,H+=m}A+=i,H+=v}A+=c,H+=y}A+=n,H+=u}A+=p,H+=l}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L;for(b=r.shape,H=r.strides,q=o.strides,"row-major"===r.order?(w=b[6],g=b[5],P=b[4],k=b[3],E=b[2],z=b[1],A=b[0],a=H[6],d=H[5]-w*H[6],i=H[4]-g*H[5],c=H[3]-P*H[4],n=H[2]-k*H[3],p=H[1]-E*H[2],h=H[0]-z*H[1],m=q[6],v=q[5]-w*q[6],y=q[4]-g*q[5],u=q[3]-P*q[4],l=q[2]-k*q[3],j=q[1]-E*q[2],x=q[0]-z*q[1]):(w=b[0],g=b[1],P=b[2],k=b[3],E=b[4],z=b[5],A=b[6],a=H[0],d=H[1]-w*H[0],i=H[2]-g*H[1],c=H[3]-P*H[2],n=H[4]-k*H[3],p=H[5]-E*H[4],h=H[6]-z*H[5],m=q[0],v=q[1]-w*q[0],y=q[2]-g*q[1],u=q[3]-P*q[2],l=q[4]-k*q[3],j=q[5]-E*q[4],x=q[6]-z*q[5]),B=r.offset,C=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],L=0;L<A;L++){for(K=0;K<z;K++){for(J=0;J<E;J++){for(I=0;I<k;I++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(D=0;D<w;D++)e(f,C,t(s,B)),B+=a,C+=m;B+=d,C+=v}B+=i,C+=y}B+=c,C+=u}B+=n,C+=l}B+=p,C+=j}B+=h,C+=x}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q;for(g=r.shape,C=r.strides,D=o.strides,"row-major"===r.order?(P=g[7],k=g[6],E=g[5],z=g[4],A=g[3],H=g[2],q=g[1],B=g[0],a=C[7],d=C[6]-P*C[7],i=C[5]-k*C[6],c=C[4]-E*C[5],n=C[3]-z*C[4],p=C[2]-A*C[3],h=C[1]-H*C[2],m=C[0]-q*C[1],v=D[7],y=D[6]-P*D[7],u=D[5]-k*D[6],l=D[4]-E*D[5],j=D[3]-z*D[4],x=D[2]-A*D[3],b=D[1]-H*D[2],w=D[0]-q*D[1]):(P=g[0],k=g[1],E=g[2],z=g[3],A=g[4],H=g[5],q=g[6],B=g[7],a=C[0],d=C[1]-P*C[0],i=C[2]-k*C[1],c=C[3]-E*C[2],n=C[4]-z*C[3],p=C[5]-A*C[4],h=C[6]-H*C[5],m=C[7]-q*C[6],v=D[0],y=D[1]-P*D[0],u=D[2]-k*D[1],l=D[3]-E*D[2],j=D[4]-z*D[3],x=D[5]-A*D[4],b=D[6]-H*D[5],w=D[7]-q*D[6]),F=r.offset,G=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],Q=0;Q<B;Q++){for(O=0;O<q;O++){for(N=0;N<H;N++){for(M=0;M<A;M++){for(L=0;L<z;L++){for(K=0;K<E;K++){for(J=0;J<k;J++){for(I=0;I<P;I++)e(f,G,t(s,F)),F+=a,G+=v;F+=d,G+=y}F+=i,G+=u}F+=c,G+=l}F+=n,G+=j}F+=p,G+=x}F+=h,G+=b}F+=m,G+=w}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U;for(k=r.shape,G=r.strides,I=o.strides,"row-major"===r.order?(E=k[8],z=k[7],A=k[6],H=k[5],q=k[4],B=k[3],C=k[2],D=k[1],F=k[0],a=G[8],d=G[7]-E*G[8],i=G[6]-z*G[7],c=G[5]-A*G[6],n=G[4]-H*G[5],p=G[3]-q*G[4],h=G[2]-B*G[3],m=G[1]-C*G[2],v=G[0]-D*G[1],y=I[8],u=I[7]-E*I[8],l=I[6]-z*I[7],j=I[5]-A*I[6],x=I[4]-H*I[5],b=I[3]-q*I[4],w=I[2]-B*I[3],g=I[1]-C*I[2],P=I[0]-D*I[1]):(E=k[0],z=k[1],A=k[2],H=k[3],q=k[4],B=k[5],C=k[6],D=k[7],F=k[8],a=G[0],d=G[1]-E*G[0],i=G[2]-z*G[1],c=G[3]-A*G[2],n=G[4]-H*G[3],p=G[5]-q*G[4],h=G[6]-B*G[5],m=G[7]-C*G[6],v=G[8]-D*G[7],y=I[0],u=I[1]-E*I[0],l=I[2]-z*I[1],j=I[3]-A*I[2],x=I[4]-H*I[3],b=I[5]-q*I[4],w=I[6]-B*I[5],g=I[7]-C*I[6],P=I[8]-D*I[7]),J=r.offset,K=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<H;O++){for(N=0;N<A;N++){for(M=0;M<z;M++){for(L=0;L<E;L++)e(f,K,t(s,J)),J+=a,K+=y;J+=d,K+=u}J+=i,K+=l}J+=c,K+=j}J+=n,K+=x}J+=p,K+=b}J+=h,K+=w}J+=m,K+=g}J+=v,K+=P}},function(r,o){var s,f,t,e,a,d,i,c,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y;for(z=r.shape,K=r.strides,L=o.strides,"row-major"===r.order?(A=z[9],H=z[8],q=z[7],B=z[6],C=z[5],D=z[4],F=z[3],G=z[2],I=z[1],J=z[0],a=K[9],d=K[8]-A*K[9],i=K[7]-H*K[8],c=K[6]-q*K[7],n=K[5]-B*K[6],p=K[4]-C*K[5],h=K[3]-D*K[4],m=K[2]-F*K[3],v=K[1]-G*K[2],y=K[0]-I*K[1],u=L[9],l=L[8]-A*L[9],j=L[7]-H*L[8],x=L[6]-q*L[7],b=L[5]-B*L[6],w=L[4]-C*L[5],g=L[3]-D*L[4],P=L[2]-F*L[3],k=L[1]-G*L[2],E=L[0]-I*L[1]):(A=z[0],H=z[1],q=z[2],B=z[3],C=z[4],D=z[5],F=z[6],G=z[7],I=z[8],J=z[9],a=K[0],d=K[1]-A*K[0],i=K[2]-H*K[1],c=K[3]-q*K[2],n=K[4]-B*K[3],p=K[5]-C*K[4],h=K[6]-D*K[5],m=K[7]-F*K[6],v=K[8]-G*K[7],y=K[9]-I*K[8],u=L[0],l=L[1]-A*L[0],j=L[2]-H*L[1],x=L[3]-q*L[2],b=L[4]-B*L[3],w=L[5]-C*L[4],g=L[6]-D*L[5],P=L[7]-F*L[6],k=L[8]-G*L[7],E=L[9]-I*L[8]),M=r.offset,N=o.offset,s=r.data,f=o.data,t=r.accessors[0],e=o.accessors[1],Y=0;Y<J;Y++){for(X=0;X<I;X++){for(W=0;W<G;W++){for(V=0;V<F;V++){for(U=0;U<D;U++){for(T=0;T<C;T++){for(S=0;S<B;S++){for(R=0;R<q;R++){for(Q=0;Q<H;Q++){for(O=0;O<A;O++)e(f,N,t(s,M)),M+=a,N+=u;M+=d,N+=l}M+=i,N+=j}M+=c,N+=x}M+=n,N+=b}M+=p,N+=w}M+=h,N+=g}M+=m,N+=P}M+=v,N+=k}M+=y,N+=E}}],u=[function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z;for(m=(z=i(r.shape,r.strides,o.strides)).sh,u=z.sx,l=z.sy,s=c(r.dtype,o.dtype),j=r.offset,x=o.offset,f=r.data,t=o.data,e=u[0],d=l[0],E=m[1];E>0;)for(E<s?(y=E,E=0):(y=s,E-=s),p=j+E*u[1],h=x+E*l[1],k=m[0];k>0;)for(k<s?(v=k,k=0):(v=s,k-=s),b=p+k*u[0],w=h+k*l[0],a=u[1]-v*u[0],n=l[1]-v*l[0],P=0;P<y;P++){for(g=0;g<v;g++)t[w]=f[b],b+=e,w+=d;b+=a,w+=n}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F;for(l=(F=i(r.shape,r.strides,o.strides)).sh,w=F.sx,g=F.sy,s=c(r.dtype,o.dtype),P=r.offset,k=o.offset,f=r.data,t=o.data,e=w[0],n=g[0],D=l[2];D>0;)for(D<s?(b=D,D=0):(b=s,D-=s),v=P+D*w[2],u=k+D*g[2],C=l[1];C>0;)for(C<s?(x=C,C=0):(x=s,C-=s),d=w[2]-x*w[1],h=g[2]-x*g[1],m=v+C*w[1],y=u+C*g[1],B=l[0];B>0;)for(B<s?(j=B,B=0):(j=s,B-=s),E=m+B*w[0],z=y+B*g[0],a=w[1]-j*w[0],p=g[1]-j*g[0],q=0;q<b;q++){for(H=0;H<x;H++){for(A=0;A<j;A++)t[z]=f[E],E+=e,z+=n;E+=a,z+=p}E+=d,z+=h}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N;for(w=(N=i(r.shape,r.strides,o.strides)).sh,z=N.sx,A=N.sy,s=c(r.dtype,o.dtype),H=r.offset,q=o.offset,f=r.data,t=o.data,e=z[0],p=A[0],M=w[3];M>0;)for(M<s?(E=M,M=0):(E=s,M-=s),l=H+M*z[3],b=q+M*A[3],L=w[2];L>0;)for(L<s?(k=L,L=0):(k=s,L-=s),n=z[3]-k*z[2],v=A[3]-k*A[2],u=l+L*z[2],x=b+L*A[2],K=w[1];K>0;)for(K<s?(P=K,K=0):(P=s,K-=s),d=z[2]-P*z[1],m=A[2]-P*A[1],y=u+K*z[1],j=x+K*A[1],J=w[0];J>0;)for(J<s?(g=J,J=0):(g=s,J-=s),B=y+J*z[0],C=j+J*A[0],a=z[1]-g*z[0],h=A[1]-g*A[0],I=0;I<E;I++){for(G=0;G<k;G++){for(F=0;F<P;F++){for(D=0;D<g;D++)t[C]=f[B],B+=e,C+=p;B+=a,C+=h}B+=d,C+=m}B+=n,C+=v}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V;for(E=(V=i(r.shape,r.strides,o.strides)).sh,C=V.sx,D=V.sy,s=c(r.dtype,o.dtype),F=r.offset,G=o.offset,f=r.data,t=o.data,e=C[0],h=D[0],U=E[4];U>0;)for(U<s?(B=U,U=0):(B=s,U-=s),b=F+U*C[4],k=G+U*D[4],T=E[3];T>0;)for(T<s?(q=T,T=0):(q=s,T-=s),p=C[4]-q*C[3],u=D[4]-q*D[3],x=b+T*C[3],P=k+T*D[3],S=E[2];S>0;)for(S<s?(H=S,S=0):(H=s,S-=s),n=C[3]-H*C[2],y=D[3]-H*D[2],j=x+S*C[2],g=P+S*D[2],R=E[1];R>0;)for(R<s?(A=R,R=0):(A=s,R-=s),d=C[2]-A*C[1],v=D[2]-A*D[1],l=j+R*C[1],w=g+R*D[1],Q=E[0];Q>0;)for(Q<s?(z=Q,Q=0):(z=s,Q-=s),I=l+Q*C[0],J=w+Q*D[0],a=C[1]-z*C[0],m=D[1]-z*D[0],O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<H;M++){for(L=0;L<A;L++){for(K=0;K<z;K++)t[J]=f[I],I+=e,J+=h;I+=a,J+=m}I+=d,J+=v}I+=n,J+=y}I+=p,J+=u}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(q=(rr=i(r.shape,r.strides,o.strides)).sh,J=rr.sx,K=rr.sy,s=c(r.dtype,o.dtype),L=r.offset,M=o.offset,f=r.data,t=o.data,e=J[0],m=K[0],_=q[5];_>0;)for(_<s?(I=_,_=0):(I=s,_-=s),P=L+_*J[5],H=M+_*K[5],$=q[4];$>0;)for($<s?(G=$,$=0):(G=s,$-=s),h=J[5]-G*J[4],j=K[5]-G*K[4],g=P+$*J[4],A=H+$*K[4],Z=q[3];Z>0;)for(Z<s?(F=Z,Z=0):(F=s,Z-=s),p=J[4]-F*J[3],l=K[4]-F*K[3],w=g+Z*J[3],z=A+Z*K[3],Y=q[2];Y>0;)for(Y<s?(D=Y,Y=0):(D=s,Y-=s),n=J[3]-D*J[2],u=K[3]-D*K[2],b=w+Y*J[2],E=z+Y*K[2],X=q[1];X>0;)for(X<s?(C=X,X=0):(C=s,X-=s),d=J[2]-C*J[1],y=K[2]-C*K[1],x=b+X*J[1],k=E+X*K[1],W=q[0];W>0;)for(W<s?(B=W,W=0):(B=s,W-=s),N=x+W*J[0],O=k+W*K[0],a=J[1]-B*J[0],v=K[1]-B*K[0],V=0;V<I;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++)t[O]=f[N],N+=e,O+=m;N+=a,O+=v}N+=d,O+=y}N+=n,O+=u}N+=p,O+=l}N+=h,O+=j}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr;for(F=(dr=i(r.shape,r.strides,o.strides)).sh,O=dr.sx,Q=dr.sy,s=c(r.dtype,o.dtype),R=r.offset,S=o.offset,f=r.data,t=o.data,e=O[0],v=Q[0],ar=F[6];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),z=R+ar*O[6],D=S+ar*Q[6],er=F[5];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),m=O[6]-M*O[5],b=Q[6]-M*Q[5],E=z+er*O[5],C=D+er*Q[5],tr=F[4];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),h=O[5]-L*O[4],x=Q[5]-L*Q[4],k=E+tr*O[4],B=C+tr*Q[4],fr=F[3];fr>0;)for(fr<s?(K=fr,fr=0):(K=s,fr-=s),p=O[4]-K*O[3],j=Q[4]-K*Q[3],P=k+fr*O[3],q=B+fr*Q[3],sr=F[2];sr>0;)for(sr<s?(J=sr,sr=0):(J=s,sr-=s),n=O[3]-J*O[2],l=Q[3]-J*Q[2],g=P+sr*O[2],H=q+sr*Q[2],or=F[1];or>0;)for(or<s?(I=or,or=0):(I=s,or-=s),d=O[2]-I*O[1],u=Q[2]-I*Q[1],w=g+or*O[1],A=H+or*Q[1],rr=F[0];rr>0;)for(rr<s?(G=rr,rr=0):(G=s,rr-=s),T=w+rr*O[0],U=A+rr*Q[0],a=O[1]-G*O[0],y=Q[1]-G*Q[0],_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<G;V++)t[U]=f[T],T+=e,U+=v;T+=a,U+=y}T+=d,U+=u}T+=n,U+=l}T+=p,U+=j}T+=h,U+=x}T+=m,U+=b}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr;for(K=(vr=i(r.shape,r.strides,o.strides)).sh,U=vr.sx,V=vr.sy,s=c(r.dtype,o.dtype),W=r.offset,X=o.offset,f=r.data,t=o.data,e=U[0],y=V[0],mr=K[7];mr>0;)for(mr<s?(T=mr,mr=0):(T=s,mr-=s),q=W+mr*U[7],J=X+mr*V[7],hr=K[6];hr>0;)for(hr<s?(S=hr,hr=0):(S=s,hr-=s),v=U[7]-S*U[6],g=V[7]-S*V[6],H=q+hr*U[6],I=J+hr*V[6],pr=K[5];pr>0;)for(pr<s?(R=pr,pr=0):(R=s,pr-=s),m=U[6]-R*U[5],w=V[6]-R*V[5],A=H+pr*U[5],G=I+pr*V[5],nr=K[4];nr>0;)for(nr<s?(Q=nr,nr=0):(Q=s,nr-=s),h=U[5]-Q*U[4],b=V[5]-Q*V[4],z=A+nr*U[4],F=G+nr*V[4],cr=K[3];cr>0;)for(cr<s?(O=cr,cr=0):(O=s,cr-=s),p=U[4]-O*U[3],x=V[4]-O*V[3],E=z+cr*U[3],D=F+cr*V[3],ir=K[2];ir>0;)for(ir<s?(N=ir,ir=0):(N=s,ir-=s),n=U[3]-N*U[2],j=V[3]-N*V[2],k=E+ir*U[2],C=D+ir*V[2],dr=K[1];dr>0;)for(dr<s?(M=dr,dr=0):(M=s,dr-=s),d=U[2]-M*U[1],l=V[2]-M*V[1],P=k+dr*U[1],B=C+dr*V[1],ar=K[0];ar>0;)for(ar<s?(L=ar,ar=0):(L=s,ar-=s),Y=P+ar*U[0],Z=B+ar*V[0],a=U[1]-L*U[0],u=V[1]-L*V[0],er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++){for(_=0;_<M;_++){for($=0;$<L;$++)t[Z]=f[Y],Y+=e,Z+=y;Y+=a,Z+=u}Y+=d,Z+=l}Y+=n,Z+=j}Y+=p,Z+=x}Y+=h,Z+=b}Y+=m,Z+=w}Y+=v,Z+=g}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr,yr,ur,lr,jr,xr,br,wr;for(O=(wr=i(r.shape,r.strides,o.strides)).sh,Z=wr.sx,$=wr.sy,s=c(r.dtype,o.dtype),_=r.offset,rr=o.offset,f=r.data,t=o.data,e=Z[0],u=$[0],br=O[8];br>0;)for(br<s?(Y=br,br=0):(Y=s,br-=s),D=_+br*Z[8],N=rr+br*$[8],xr=O[7];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),y=Z[8]-X*Z[7],k=$[8]-X*$[7],C=D+xr*Z[7],M=N+xr*$[7],jr=O[6];jr>0;)for(jr<s?(W=jr,jr=0):(W=s,jr-=s),v=Z[7]-W*Z[6],P=$[7]-W*$[6],B=C+jr*Z[6],L=M+jr*$[6],lr=O[5];lr>0;)for(lr<s?(V=lr,lr=0):(V=s,lr-=s),m=Z[6]-V*Z[5],g=$[6]-V*$[5],q=B+lr*Z[5],K=L+lr*$[5],ur=O[4];ur>0;)for(ur<s?(U=ur,ur=0):(U=s,ur-=s),h=Z[5]-U*Z[4],w=$[5]-U*$[4],H=q+ur*Z[4],J=K+ur*$[4],yr=O[3];yr>0;)for(yr<s?(T=yr,yr=0):(T=s,yr-=s),p=Z[4]-T*Z[3],b=$[4]-T*$[3],A=H+yr*Z[3],I=J+yr*$[3],vr=O[2];vr>0;)for(vr<s?(S=vr,vr=0):(S=s,vr-=s),n=Z[3]-S*Z[2],x=$[3]-S*$[2],z=A+vr*Z[2],G=I+vr*$[2],mr=O[1];mr>0;)for(mr<s?(R=mr,mr=0):(R=s,mr-=s),d=Z[2]-R*Z[1],j=$[2]-R*$[1],E=z+mr*Z[1],F=G+mr*$[1],hr=O[0];hr>0;)for(hr<s?(Q=hr,hr=0):(Q=s,hr-=s),or=E+hr*Z[0],sr=F+hr*$[0],a=Z[1]-Q*Z[0],l=$[1]-Q*$[0],pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++){for(er=0;er<S;er++){for(tr=0;tr<R;tr++){for(fr=0;fr<Q;fr++)t[sr]=f[or],or+=e,sr+=u;or+=a,sr+=l}or+=d,sr+=j}or+=n,sr+=x}or+=p,sr+=b}or+=h,sr+=w}or+=m,sr+=g}or+=v,sr+=P}or+=y,sr+=k}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr,yr,ur,lr,jr,xr,br,wr,gr,Pr,kr,Er,zr,Ar,Hr;for(T=(Hr=i(r.shape,r.strides,o.strides)).sh,sr=Hr.sx,fr=Hr.sy,s=c(r.dtype,o.dtype),tr=r.offset,er=o.offset,f=r.data,t=o.data,e=sr[0],l=fr[0],Ar=T[9];Ar>0;)for(Ar<s?(or=Ar,Ar=0):(or=s,Ar-=s),I=tr+Ar*sr[9],S=er+Ar*fr[9],zr=T[8];zr>0;)for(zr<s?(rr=zr,zr=0):(rr=s,zr-=s),u=sr[9]-rr*sr[8],z=fr[9]-rr*fr[8],G=I+zr*sr[8],R=S+zr*fr[8],Er=T[7];Er>0;)for(Er<s?(_=Er,Er=0):(_=s,Er-=s),y=sr[8]-_*sr[7],E=fr[8]-_*fr[7],F=G+Er*sr[7],Q=R+Er*fr[7],kr=T[6];kr>0;)for(kr<s?($=kr,kr=0):($=s,kr-=s),v=sr[7]-$*sr[6],k=fr[7]-$*fr[6],D=F+kr*sr[6],O=Q+kr*fr[6],Pr=T[5];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),m=sr[6]-Z*sr[5],P=fr[6]-Z*fr[5],C=D+Pr*sr[5],N=O+Pr*fr[5],gr=T[4];gr>0;)for(gr<s?(Y=gr,gr=0):(Y=s,gr-=s),h=sr[5]-Y*sr[4],g=fr[5]-Y*fr[4],B=C+gr*sr[4],M=N+gr*fr[4],wr=T[3];wr>0;)for(wr<s?(X=wr,wr=0):(X=s,wr-=s),p=sr[4]-X*sr[3],w=fr[4]-X*fr[3],q=B+wr*sr[3],L=M+wr*fr[3],br=T[2];br>0;)for(br<s?(W=br,br=0):(W=s,br-=s),n=sr[3]-W*sr[2],b=fr[3]-W*fr[2],H=q+br*sr[2],K=L+br*fr[2],xr=T[1];xr>0;)for(xr<s?(V=xr,xr=0):(V=s,xr-=s),d=sr[2]-V*sr[1],x=fr[2]-V*fr[1],A=H+xr*sr[1],J=K+xr*fr[1],jr=T[0];jr>0;)for(jr<s?(U=jr,jr=0):(U=s,jr-=s),ar=A+jr*sr[0],dr=J+jr*fr[0],a=sr[1]-U*sr[0],j=fr[1]-U*fr[0],lr=0;lr<or;lr++){for(ur=0;ur<rr;ur++){for(yr=0;yr<_;yr++){for(vr=0;vr<$;vr++){for(mr=0;mr<Z;mr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(nr=0;nr<W;nr++){for(cr=0;cr<V;cr++){for(ir=0;ir<U;ir++)t[dr]=f[ar],ar+=e,dr+=l;ar+=a,dr+=j}ar+=d,dr+=x}ar+=n,dr+=b}ar+=p,dr+=w}ar+=h,dr+=g}ar+=m,dr+=P}ar+=v,dr+=k}ar+=y,dr+=E}ar+=u,dr+=z}}],l=[function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H;for(y=(H=i(r.shape,r.strides,o.strides)).sh,j=H.sx,x=H.sy,s=c(r.dtype,o.dtype),b=r.offset,w=o.offset,f=r.data,t=o.data,d=j[0],p=x[0],e=r.accessors[0],a=o.accessors[1],A=y[1];A>0;)for(A<s?(l=A,A=0):(l=s,A-=s),m=b+A*j[1],v=w+A*x[1],z=y[0];z>0;)for(z<s?(u=z,z=0):(u=s,z-=s),g=m+z*j[0],P=v+z*x[0],n=j[1]-u*j[0],h=x[1]-u*x[0],E=0;E<l;E++){for(k=0;k<u;k++)a(t,P,e(f,g)),g+=d,P+=p;g+=n,P+=h}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I;for(x=(I=i(r.shape,r.strides,o.strides)).sh,P=I.sx,k=I.sy,s=c(r.dtype,o.dtype),E=r.offset,z=o.offset,f=r.data,t=o.data,d=P[0],h=k[0],e=r.accessors[0],a=o.accessors[1],G=x[2];G>0;)for(G<s?(g=G,G=0):(g=s,G-=s),u=E+G*P[2],j=z+G*k[2],F=x[1];F>0;)for(F<s?(w=F,F=0):(w=s,F-=s),p=P[2]-w*P[1],v=k[2]-w*k[1],y=u+F*P[1],l=j+F*k[1],D=x[0];D>0;)for(D<s?(b=D,D=0):(b=s,D-=s),A=y+D*P[0],H=l+D*k[0],n=P[1]-b*P[0],m=k[1]-b*k[0],C=0;C<g;C++){for(B=0;B<w;B++){for(q=0;q<b;q++)a(t,H,e(f,A)),A+=d,H+=h;A+=n,H+=m}A+=p,H+=v}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q;for(P=(Q=i(r.shape,r.strides,o.strides)).sh,H=Q.sx,q=Q.sy,s=c(r.dtype,o.dtype),B=r.offset,C=o.offset,f=r.data,t=o.data,d=H[0],m=q[0],e=r.accessors[0],a=o.accessors[1],O=P[3];O>0;)for(O<s?(A=O,O=0):(A=s,O-=s),x=B+O*H[3],g=C+O*q[3],N=P[2];N>0;)for(N<s?(z=N,N=0):(z=s,N-=s),h=H[3]-z*H[2],u=q[3]-z*q[2],j=x+N*H[2],w=g+N*q[2],M=P[1];M>0;)for(M<s?(E=M,M=0):(E=s,M-=s),p=H[2]-E*H[1],y=q[2]-E*q[1],l=j+M*H[1],b=w+M*q[1],L=P[0];L>0;)for(L<s?(k=L,L=0):(k=s,L-=s),D=l+L*H[0],F=b+L*q[0],n=H[1]-k*H[0],v=q[1]-k*q[0],K=0;K<A;K++){for(J=0;J<z;J++){for(I=0;I<E;I++){for(G=0;G<k;G++)a(t,F,e(f,D)),D+=d,F+=m;D+=n,F+=v}D+=p,F+=y}D+=h,F+=u}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X;for(A=(X=i(r.shape,r.strides,o.strides)).sh,F=X.sx,G=X.sy,s=c(r.dtype,o.dtype),I=r.offset,J=o.offset,f=r.data,t=o.data,d=F[0],v=G[0],e=r.accessors[0],a=o.accessors[1],W=A[4];W>0;)for(W<s?(D=W,W=0):(D=s,W-=s),g=I+W*F[4],z=J+W*G[4],V=A[3];V>0;)for(V<s?(C=V,V=0):(C=s,V-=s),m=F[4]-C*F[3],j=G[4]-C*G[3],w=g+V*F[3],E=z+V*G[3],U=A[2];U>0;)for(U<s?(B=U,U=0):(B=s,U-=s),h=F[3]-B*F[2],l=G[3]-B*G[2],b=w+U*F[2],k=E+U*G[2],T=A[1];T>0;)for(T<s?(q=T,T=0):(q=s,T-=s),p=F[2]-q*F[1],u=G[2]-q*G[1],x=b+T*F[1],P=k+T*G[1],S=A[0];S>0;)for(S<s?(H=S,S=0):(H=s,S-=s),K=x+S*F[0],L=P+S*G[0],n=F[1]-H*F[0],y=G[1]-H*G[0],R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<H;M++)a(t,L,e(f,K)),K+=d,L+=v;K+=n,L+=y}K+=p,L+=u}K+=h,L+=l}K+=m,L+=j}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr;for(C=(sr=i(r.shape,r.strides,o.strides)).sh,L=sr.sx,M=sr.sy,s=c(r.dtype,o.dtype),N=r.offset,O=o.offset,f=r.data,t=o.data,d=L[0],y=M[0],e=r.accessors[0],a=o.accessors[1],or=C[5];or>0;)for(or<s?(K=or,or=0):(K=s,or-=s),E=N+or*L[5],B=O+or*M[5],rr=C[4];rr>0;)for(rr<s?(J=rr,rr=0):(J=s,rr-=s),v=L[5]-J*L[4],b=M[5]-J*M[4],k=E+rr*L[4],q=B+rr*M[4],_=C[3];_>0;)for(_<s?(I=_,_=0):(I=s,_-=s),m=L[4]-I*L[3],x=M[4]-I*M[3],P=k+_*L[3],H=q+_*M[3],$=C[2];$>0;)for($<s?(G=$,$=0):(G=s,$-=s),h=L[3]-G*L[2],j=M[3]-G*M[2],g=P+$*L[2],A=H+$*M[2],Z=C[1];Z>0;)for(Z<s?(F=Z,Z=0):(F=s,Z-=s),p=L[2]-F*L[1],l=M[2]-F*M[1],w=g+Z*L[1],z=A+Z*M[1],Y=C[0];Y>0;)for(Y<s?(D=Y,Y=0):(D=s,Y-=s),Q=w+Y*L[0],R=z+Y*M[0],n=L[1]-D*L[0],u=M[1]-D*M[0],X=0;X<K;X++){for(W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++)a(t,R,e(f,Q)),Q+=d,R+=y;Q+=n,R+=u}Q+=p,R+=l}Q+=h,R+=j}Q+=m,R+=x}Q+=v,R+=b}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr;for(I=(cr=i(r.shape,r.strides,o.strides)).sh,R=cr.sx,S=cr.sy,s=c(r.dtype,o.dtype),T=r.offset,U=o.offset,f=r.data,t=o.data,d=R[0],u=S[0],e=r.accessors[0],a=o.accessors[1],ir=I[6];ir>0;)for(ir<s?(Q=ir,ir=0):(Q=s,ir-=s),H=T+ir*R[6],G=U+ir*S[6],dr=I[5];dr>0;)for(dr<s?(O=dr,dr=0):(O=s,dr-=s),y=R[6]-O*R[5],g=S[6]-O*S[5],A=H+dr*R[5],F=G+dr*S[5],ar=I[4];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),v=R[5]-N*R[4],w=S[5]-N*S[4],z=A+ar*R[4],D=F+ar*S[4],er=I[3];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),m=R[4]-M*R[3],b=S[4]-M*S[3],E=z+er*R[3],C=D+er*S[3],tr=I[2];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),h=R[3]-L*R[2],x=S[3]-L*S[2],k=E+tr*R[2],B=C+tr*S[2],fr=I[1];fr>0;)for(fr<s?(K=fr,fr=0):(K=s,fr-=s),p=R[2]-K*R[1],j=S[2]-K*S[1],P=k+fr*R[1],q=B+fr*S[1],sr=I[0];sr>0;)for(sr<s?(J=sr,sr=0):(J=s,sr-=s),V=P+sr*R[0],W=q+sr*S[0],n=R[1]-J*R[0],l=S[1]-J*S[0],or=0;or<Q;or++){for(rr=0;rr<O;rr++){for(_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++)a(t,W,e(f,V)),V+=d,W+=u;V+=n,W+=l}V+=p,W+=j}V+=h,W+=x}V+=m,W+=b}V+=v,W+=w}V+=y,W+=g}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr,yr,ur;for(M=(ur=i(r.shape,r.strides,o.strides)).sh,W=ur.sx,X=ur.sy,s=c(r.dtype,o.dtype),Y=r.offset,Z=o.offset,f=r.data,t=o.data,d=W[0],l=X[0],e=r.accessors[0],a=o.accessors[1],yr=M[7];yr>0;)for(yr<s?(V=yr,yr=0):(V=s,yr-=s),C=Y+yr*W[7],L=Z+yr*X[7],vr=M[6];vr>0;)for(vr<s?(U=vr,vr=0):(U=s,vr-=s),u=W[7]-U*W[6],k=X[7]-U*X[6],B=C+vr*W[6],K=L+vr*X[6],mr=M[5];mr>0;)for(mr<s?(T=mr,mr=0):(T=s,mr-=s),y=W[6]-T*W[5],P=X[6]-T*X[5],q=B+mr*W[5],J=K+mr*X[5],hr=M[4];hr>0;)for(hr<s?(S=hr,hr=0):(S=s,hr-=s),v=W[5]-S*W[4],g=X[5]-S*X[4],H=q+hr*W[4],I=J+hr*X[4],pr=M[3];pr>0;)for(pr<s?(R=pr,pr=0):(R=s,pr-=s),m=W[4]-R*W[3],w=X[4]-R*X[3],A=H+pr*W[3],G=I+pr*X[3],nr=M[2];nr>0;)for(nr<s?(Q=nr,nr=0):(Q=s,nr-=s),h=W[3]-Q*W[2],b=X[3]-Q*X[2],z=A+nr*W[2],F=G+nr*X[2],cr=M[1];cr>0;)for(cr<s?(O=cr,cr=0):(O=s,cr-=s),p=W[2]-O*W[1],x=X[2]-O*X[1],E=z+cr*W[1],D=F+cr*X[1],ir=M[0];ir>0;)for(ir<s?(N=ir,ir=0):(N=s,ir-=s),$=E+ir*W[0],_=D+ir*X[0],n=W[1]-N*W[0],j=X[1]-N*X[0],dr=0;dr<V;dr++){for(ar=0;ar<U;ar++){for(er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++)a(t,_,e(f,$)),$+=d,_+=l;$+=n,_+=j}$+=p,_+=x}$+=h,_+=b}$+=m,_+=w}$+=v,_+=g}$+=y,_+=P}$+=u,_+=k}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr,yr,ur,lr,jr,xr,br,wr,gr,Pr;for(R=(Pr=i(r.shape,r.strides,o.strides)).sh,_=Pr.sx,rr=Pr.sy,s=c(r.dtype,o.dtype),or=r.offset,sr=o.offset,f=r.data,t=o.data,d=_[0],j=rr[0],e=r.accessors[0],a=o.accessors[1],gr=R[8];gr>0;)for(gr<s?($=gr,gr=0):($=s,gr-=s),G=or+gr*_[8],Q=sr+gr*rr[8],wr=R[7];wr>0;)for(wr<s?(Z=wr,wr=0):(Z=s,wr-=s),l=_[8]-Z*_[7],z=rr[8]-Z*rr[7],F=G+wr*_[7],O=Q+wr*rr[7],br=R[6];br>0;)for(br<s?(Y=br,br=0):(Y=s,br-=s),u=_[7]-Y*_[6],E=rr[7]-Y*rr[6],D=F+br*_[6],N=O+br*rr[6],xr=R[5];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),y=_[6]-X*_[5],k=rr[6]-X*rr[5],C=D+xr*_[5],M=N+xr*rr[5],jr=R[4];jr>0;)for(jr<s?(W=jr,jr=0):(W=s,jr-=s),v=_[5]-W*_[4],P=rr[5]-W*rr[4],B=C+jr*_[4],L=M+jr*rr[4],lr=R[3];lr>0;)for(lr<s?(V=lr,lr=0):(V=s,lr-=s),m=_[4]-V*_[3],g=rr[4]-V*rr[3],q=B+lr*_[3],K=L+lr*rr[3],ur=R[2];ur>0;)for(ur<s?(U=ur,ur=0):(U=s,ur-=s),h=_[3]-U*_[2],w=rr[3]-U*rr[2],H=q+ur*_[2],J=K+ur*rr[2],yr=R[1];yr>0;)for(yr<s?(T=yr,yr=0):(T=s,yr-=s),p=_[2]-T*_[1],b=rr[2]-T*rr[1],A=H+yr*_[1],I=J+yr*rr[1],vr=R[0];vr>0;)for(vr<s?(S=vr,vr=0):(S=s,vr-=s),fr=A+vr*_[0],tr=I+vr*rr[0],n=_[1]-S*_[0],x=rr[1]-S*rr[0],mr=0;mr<$;mr++){for(hr=0;hr<Z;hr++){for(pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++){for(er=0;er<S;er++)a(t,tr,e(f,fr)),fr+=d,tr+=j;fr+=n,tr+=x}fr+=p,tr+=b}fr+=h,tr+=w}fr+=m,tr+=g}fr+=v,tr+=P}fr+=y,tr+=k}fr+=u,tr+=E}fr+=l,tr+=z}},function(r,o){var s,f,t,e,a,d,n,p,h,m,v,y,u,l,j,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,mr,vr,yr,ur,lr,jr,xr,br,wr,gr,Pr,kr,Er,zr,Ar,Hr,qr,Br;for(V=(Br=i(r.shape,r.strides,o.strides)).sh,tr=Br.sx,er=Br.sy,s=c(r.dtype,o.dtype),ar=r.offset,dr=o.offset,f=r.data,t=o.data,d=tr[0],x=er[0],e=r.accessors[0],a=o.accessors[1],qr=V[9];qr>0;)for(qr<s?(fr=qr,qr=0):(fr=s,qr-=s),K=ar+qr*tr[9],U=dr+qr*er[9],Hr=V[8];Hr>0;)for(Hr<s?(sr=Hr,Hr=0):(sr=s,Hr-=s),j=tr[9]-sr*tr[8],H=er[9]-sr*er[8],J=K+Hr*tr[8],T=U+Hr*er[8],Ar=V[7];Ar>0;)for(Ar<s?(or=Ar,Ar=0):(or=s,Ar-=s),l=tr[8]-or*tr[7],A=er[8]-or*er[7],I=J+Ar*tr[7],S=T+Ar*er[7],zr=V[6];zr>0;)for(zr<s?(rr=zr,zr=0):(rr=s,zr-=s),u=tr[7]-rr*tr[6],z=er[7]-rr*er[6],G=I+zr*tr[6],R=S+zr*er[6],Er=V[5];Er>0;)for(Er<s?(_=Er,Er=0):(_=s,Er-=s),y=tr[6]-_*tr[5],E=er[6]-_*er[5],F=G+Er*tr[5],Q=R+Er*er[5],kr=V[4];kr>0;)for(kr<s?($=kr,kr=0):($=s,kr-=s),v=tr[5]-$*tr[4],k=er[5]-$*er[4],D=F+kr*tr[4],O=Q+kr*er[4],Pr=V[3];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),m=tr[4]-Z*tr[3],P=er[4]-Z*er[3],C=D+Pr*tr[3],N=O+Pr*er[3],gr=V[2];gr>0;)for(gr<s?(Y=gr,gr=0):(Y=s,gr-=s),h=tr[3]-Y*tr[2],g=er[3]-Y*er[2],B=C+gr*tr[2],M=N+gr*er[2],wr=V[1];wr>0;)for(wr<s?(X=wr,wr=0):(X=s,wr-=s),p=tr[2]-X*tr[1],w=er[2]-X*er[1],q=B+wr*tr[1],L=M+wr*er[1],br=V[0];br>0;)for(br<s?(W=br,br=0):(W=s,br-=s),ir=q+br*tr[0],cr=L+br*er[0],n=tr[1]-W*tr[0],b=er[1]-W*er[0],xr=0;xr<fr;xr++){for(jr=0;jr<sr;jr++){for(lr=0;lr<or;lr++){for(ur=0;ur<rr;ur++){for(yr=0;yr<_;yr++){for(vr=0;vr<$;vr++){for(mr=0;mr<Z;mr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(nr=0;nr<W;nr++)a(t,cr,e(f,ir)),ir+=d,cr+=x;ir+=n,cr+=b}ir+=p,cr+=w}ir+=h,cr+=g}ir+=m,cr+=P}ir+=v,cr+=k}ir+=y,cr+=E}ir+=u,cr+=z}ir+=l,cr+=A}ir+=j,cr+=H}}],j=v.length-1;function x(i){var c,x,b,w,g,P,k,E,z,A,H,q,B,C,D,F,G;if(C=d(i[0]),D=d(i[1]),s(C.dtype)&&o(D.dtype)&&(C.accessorProtocol=!0,C.accessors[0]=t(C.accessors[0],2,e(D.dtype))),w=C.shape,g=D.shape,(c=w.length)!==g.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+c+". ndims(y) == "+g.length+".");if(0===c)return C.accessorProtocol||D.accessorProtocol?y[c](C,D):v[c](C,D);for(E=1,B=0,G=0;G<c;G++){if((F=w[G])!==g[G])throw new Error(r("1kH0d"));E*=F,1===F&&(B+=1)}if(0!==E){if(1===c)return C.accessorProtocol||D.accessorProtocol?y[c](C,D):v[c](C,D);if(z=C.strides,A=D.strides,B===c-1){for(G=0;G<c&&1===w[G];G++);return C.shape=[w[G]],D.shape=C.shape,C.strides=[z[G]],D.strides=[A[G]],C.accessorProtocol||D.accessorProtocol?y[1](C,D):v[1](C,D)}if(P=f(z),k=f(A),0!==P&&0!==k&&P===k){if(x=a(w,z,C.offset),b=a(g,A,D.offset),E===x[1]-x[0]+1&&E===b[1]-b[0]+1)return H=1===P?x[0]:x[1],q=1===k?b[0]:b[1],C.shape=[E],D.shape=C.shape,C.strides=[P],D.strides=[k],C.offset=H,D.offset=q,C.accessorProtocol||D.accessorProtocol?y[1](C,D):v[1](C,D);if(c<=j)return C.accessorProtocol||D.accessorProtocol?y[c](C,D):v[c](C,D)}return c<=j?C.accessorProtocol||D.accessorProtocol?l[c-2](C,D):u[c-2](C,D):C.accessorProtocol||D.accessorProtocol?function(r,o){var s,f,t,e,a,d,i,c,m,v,y,u,l,j;for(c=r.shape,a=n(c),s=r.data,f=o.data,m=r.strides,v=o.strides,y=r.offset,u=o.offset,t=r.order,e=o.order,d=r.accessors[0],i=o.accessors[1],j=0;j<a;j++)l=p(c,m,y,t,j,h),i(f,p(c,v,u,e,j,h),d(s,l))}(C,D):void function(r,o){var s,f,t,e,a,d,i,c,h,v,y,u;for(d=r.shape,a=n(d),s=r.data,f=o.data,i=r.strides,c=o.strides,h=r.offset,v=o.offset,t=r.order,e=o.order,u=0;u<a;u++)y=p(d,i,h,t,u,m),f[p(d,c,v,e,u,m)]=s[y]}(C,D)}}export{x as default};
//# sourceMappingURL=index.mjs.map