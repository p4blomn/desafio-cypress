describe('API de cupons', () => {

    it.only('Deve listar todos os cupons cadastrados', () => {

        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/coupons',
            headers: {
                authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
            },
            body: {
                context: "view"
            }
        }).should((response) => {
            expect(response.status).equal(200)
            cy.log(response.body)
        })
    })

    it('Deve cadastrar cupom', () => {
        cy.fixture("coupon").then((coupon) => {
            cy.request({
                method: 'POST',
                url: 'wp-json/wc/v3/coupons',
                headers: {
                    authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
                },
                body: {
                    "code": coupon.code,
                    "amount": coupon.amount,
                    "discount_type": coupon.discount_type,
                    "description": coupon.description,
                    "minimum_amount": coupon.minimum_amount,
                    "maximum_amount": coupon.maximum_amount
                }
            }).should((response) => {
                expect(response.status).equal(201)
            })
        })

    });

});