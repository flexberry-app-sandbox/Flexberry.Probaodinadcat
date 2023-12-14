package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВходГостя
 */
@Entity(name = "IISProbaodinadcatВходГостя")
@Table(schema = "public", name = "ВходГостя")
public class VxodGostya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gost")
    @Convert("Gost")
    @Column(name = "Гость", length = 16, unique = true, nullable = false)
    private UUID _gostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gost", insertable = false, updatable = false)
    private Gost gost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistracVxoda")
    @Convert("RegistracVxoda")
    @Column(name = "РегистрацВхода", length = 16, unique = true, nullable = false)
    private UUID _registracvxodaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistracVxoda", insertable = false, updatable = false)
    private RegistracVxoda registracvxoda;


    public VxodGostya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}