// Title of the system: Hotel Mangement system
//Description: This system allows guests to book and check availabilty of hotel rooms,
//             it manages record of guests, the number and availabilty of rooms 
// and also allows hotel staff to manage the rooms and guests.


class Hotel {

    //Static propertiec
    static totalRooms = 50;
    static availableRooms = 42;

    constructor(name, location, rooms) {
        this.name = name;
        this.location = location;

    }

    addRoom() {

    }

    viewRooms() {
        console.log(`Total rooms: ${Hotel.totalRooms}, Available rooms: ${Hotel.availableRooms}`)
    }

}


class Guest {
    constructor (name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact
    }

    register() {
        console.log(`${this.name} has been registered successfully`)
    }

    login() {
        console.log(`${this.name} has been logged in `)
    }

    viewBooking(bookings) {
        console.log(`Bookings for ${this.name}:`, bookings)
    }
}


//Room class 

class Room {
    constructor (roomNumber, roomType, pricePerNight, isAvailable = true) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }

    checkAvailability() {
        return this.isAvailable
    }


    updateDetails(roomType, pricePerNight) {
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        console.log("Room details updated successfully.");
    }
}


//Booking class

class Booking {
    constructor (guest, room, checkInDate, checkOutDate, status = "Confirmed" ) {
        this.guest = guest;
        this.room = room;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.status = status;

    }

    makeBooking() {
        if(this.room.checkAvailability()) {
            this.room.isAvailable = false;
            console.log(`Booking confirmed for ${this.guest.name}.`)
        } else {
            console.log("Room is not available.")
        }
    }

    cancelBooking() {
        this.status = 'Cancelled';
        this.room.isAvailable = true;
        console.log("Booking has been cancelled.")
    }

    updateBooking(checkInDate, checkOutDate) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        console.log("Booking details updated.")
    }

}


    //Payment class 
    class Payment {
        constructor(paymentId, amount, paymentDate, status) {
            this.paymentId = paymentId;
            this.amount = amount;
            this.paymentDate = paymentDate;
            this.status = status;
            
        }

        processPayment() {
            console.log(`Payment of $${this.amount} processed successfully. `)
        }

        refundPayment() {
            console.log(`Payment of $${this.amount} has been refunded`);
            this.status = "Refunded"
        }
    }


    class Admin {
        constructor(name, email, contact) {
            this.name = name;
            this.email = email;
            this.contact = contact;
        }

        addRoom(rooms, room) {
            rooms.push(room);
            console.log(`Room ${rooms.roomNumber} has been added. `)
        }

        removeRoom(rooms, roomNumber) {
            const index = rooms.findIndex(room => room.roomNumber  === roomNumber);
            if (index !== -1) {
                rooms.splice(index, 1)
                console.log(`Room with number ${roomNumber} has been removed.`)
            } else {
                console.log("Room not found")
            }
        }

        viewReports(bookings) {
            console.log("Admin reports:", bookings);
        }
    }



    //Create Guest
    const guest1 = new Guest('John Shaft', "johnshaft504@gmail.com", 2349139856734 )
    guest1.register()

    console.log(guest1)


    //Create Rooms
    const room1 = new Room("101", "Single", "$55",true )
    const room2 = new Room("102", "Deluxe Suite", "$250", false)
    room2.updateDetails()
   
    

    // Create Booking
    const booking1 = new Booking( guest1, room1, "2025-01-20", "2025-01-25");
    booking1.makeBooking();

    //Process Payment
    const payment1 = new Payment(1, 500, "2025-01-15",);
    payment1.processPayment();